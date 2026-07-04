"use client";
import { useState, useCallback, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { ChevronLeft, ChevronRight, Loader2, Download } from "lucide-react";
import { Button } from "./ui/button";

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

const PDFViewer = () => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [width, setWidth] = useState(700);

  useEffect(() => {
    setWidth(Math.min(700, window.innerWidth - 64));
    const handleResize = () => setWidth(Math.min(700, window.innerWidth - 64));
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onDocumentLoadSuccess = useCallback(
    ({ numPages }: { numPages: number }) => {
      setNumPages(numPages);
    },
    [],
  );

  return (
    <div className="rounded-xl border border-border/60 bg-muted/10 shadow-sm overflow-hidden">
      <Document
        file="resume.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
        loading={
          <div className="flex items-center justify-center py-32">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        }
        error={
          <div className="flex flex-col items-center justify-center py-20 gap-3 text-muted-foreground">
            <p className="text-sm">Failed to load PDF preview.</p>
            <a href="resume.pdf" download="Ayoub_Krimi_Resume.pdf">
              <Button size="sm">
                <Download className="h-4 w-4" />
                Download instead
              </Button>
            </a>
          </div>
        }
        className="flex justify-center"
      >
        <Page pageNumber={pageNumber} width={width} />
      </Document>

      {numPages && numPages > 1 && (
        <div className="flex items-center justify-center gap-4 pb-4">
          <button
            onClick={() => setPageNumber((p) => Math.max(1, p - 1))}
            disabled={pageNumber <= 1}
            className="p-1 rounded-md text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors cursor-pointer"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <span className="text-sm text-muted-foreground tabular-nums">
            {pageNumber} / {numPages}
          </span>
          <button
            onClick={() => setPageNumber((p) => Math.min(numPages, p + 1))}
            disabled={pageNumber >= numPages}
            className="p-1 rounded-md text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors cursor-pointer"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
};

export default PDFViewer;
