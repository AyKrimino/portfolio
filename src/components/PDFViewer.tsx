"use client";

import { useState, useCallback, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import {
  ChevronLeft,
  ChevronRight,
  Loader2,
  Download,
  ZoomIn,
  ZoomOut,
  Maximize2,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

const MIN_SCALE = 0.5;
const MAX_SCALE = 2.5;
const SCALE_STEP = 0.25;

interface PDFViewerProps {
  file: string;
  downloadFileName?: string;
  maxWidth?: number;
}

const PDFViewer = ({ file, downloadFileName, maxWidth = 780 }: PDFViewerProps) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1);
  const [baseWidth, setBaseWidth] = useState(maxWidth);
  const [expandedWidth, setExpandedWidth] = useState(1000);
  const [pageHeight, setPageHeight] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setPageNumber(1);
    setNumPages(null);
    setScale(1);
    setPageHeight(null);
  }, [file]);

  useEffect(() => {
    const compute = () => {
      setBaseWidth(Math.min(maxWidth, window.innerWidth - 64));
      setExpandedWidth(Math.min(1300, window.innerWidth * 0.85));
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, [maxWidth]);

  const onDocumentLoadSuccess = useCallback(
    ({ numPages }: { numPages: number }) => {
      setNumPages(numPages);
    },
    [],
  );

  const onPageLoadSuccess = useCallback((page: { height: number }) => {
    setPageHeight(page.height);
  }, []);

  const goToPage = (delta: number) => {
    setPageNumber((p) => {
      if (!numPages) return p;
      return Math.min(numPages, Math.max(1, p + delta));
    });
  };

  const zoom = (delta: number) => {
    setScale((s) =>
      Math.min(MAX_SCALE, Math.max(MIN_SCALE, +(s + delta).toFixed(2))),
    );
  };

  const toolbar = (
    <div className="flex items-center justify-between gap-2 px-3 py-2 border-b border-border/60 bg-background/60 shrink-0">
      <div className="flex items-center gap-1">
        <button
          type="button"
          onClick={() => goToPage(-1)}
          disabled={pageNumber <= 1}
          className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted disabled:opacity-30 transition-colors cursor-pointer"
          aria-label="Previous page"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <span className="text-xs text-muted-foreground tabular-nums px-1 min-w-14 text-center">
          {numPages ? `${pageNumber} / ${numPages}` : "…"}
        </span>
        <button
          type="button"
          onClick={() => goToPage(1)}
          disabled={!numPages || pageNumber >= numPages}
          className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted disabled:opacity-30 transition-colors cursor-pointer"
          aria-label="Next page"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="flex items-center gap-1">
        <button
          type="button"
          onClick={() => zoom(-SCALE_STEP)}
          disabled={scale <= MIN_SCALE}
          className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted disabled:opacity-30 transition-colors cursor-pointer"
          aria-label="Zoom out"
        >
          <ZoomOut className="h-4 w-4" />
        </button>
        <span className="text-xs text-muted-foreground tabular-nums w-10 text-center">
          {Math.round(scale * 100)}%
        </span>
        <button
          type="button"
          onClick={() => zoom(SCALE_STEP)}
          disabled={scale >= MAX_SCALE}
          className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted disabled:opacity-30 transition-colors cursor-pointer"
          aria-label="Zoom in"
        >
          <ZoomIn className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => setIsExpanded(true)}
          className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer ml-1"
          aria-label="Expand to fullscreen"
        >
          <Maximize2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );

  const renderDocument = (width: number) => (
    <Document
      file={file}
      onLoadSuccess={onDocumentLoadSuccess}
      loading={
        <div className="flex items-center justify-center py-32">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      }
      error={
        <div className="flex flex-col items-center justify-center py-20 gap-3 text-muted-foreground">
          <p className="text-sm">Failed to load PDF preview.</p>
          {downloadFileName && (
            <a href={file} download={downloadFileName}>
              <Button size="sm">
                <Download className="h-4 w-4" />
                Download instead
              </Button>
            </a>
          )}
        </div>
      }
    >
      <Page
        pageNumber={pageNumber}
        width={width}
        onLoadSuccess={onPageLoadSuccess}
        loading={
          <div
            style={{ minHeight: pageHeight ?? undefined }}
            className="flex items-center justify-center w-full py-16"
          >
            <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
          </div>
        }
      />
    </Document>
  );

  return (
    <>
      <div className="rounded-xl border border-border/60 bg-muted/10 shadow-sm overflow-hidden">
        {toolbar}
        <div
          style={{ overflowAnchor: "none" }}
          className="flex justify-center overflow-x-auto py-4"
        >
          {renderDocument(baseWidth * scale)}
        </div>
      </div>

      <Dialog open={isExpanded} onOpenChange={setIsExpanded}>
        <DialogContent className="max-w-[95vw] w-full h-[90vh] p-0 gap-0 flex flex-col overflow-hidden">
          <DialogTitle className="sr-only">Document preview</DialogTitle>
          <DialogDescription className="sr-only">
            Expanded view of the document with page navigation and zoom controls.
          </DialogDescription>
          {toolbar}
          <div
            style={{ overflowAnchor: "none" }}
            className="flex-1 flex justify-center overflow-auto py-6"
          >
            {renderDocument(expandedWidth * scale)}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PDFViewer;
