"use client";
import { Download, FileText, X } from "lucide-react";
// import { motion } from "motion/react";
import { useEffect, useState } from "react";
// import { publicationVariants } from "../motion";
// import "@react-pdf-viewer/core/lib/styles/index.css";

import { journals } from "@/app/utils/data";
import { Viewer, Worker } from "@react-pdf-viewer/core";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Publication = ({ useWhileInView }: any) => {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  useEffect(() => {
    if (selectedPdf) {
      const fullUrl = `${window.location.origin}${selectedPdf}`;
      setPdfUrl(fullUrl);
    } else {
      setPdfUrl(null);
    }
  }, [selectedPdf]);
  return (
    <div
      // variants={publicationVariants}
      // initial="hidden"
      // {...(useWhileInView
      //   ? { whileInView: "visible", viewport: { once: true, amount: 0.6 } }
      //   : { animate: "visible" })}
      className="space-y-4 "
    >
      {journals.map((journal) => (
        <div
          key={journal.id}
          className="collapse collapse-arrow bg-white shadow-md rounded-lg"
        >
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-lg font-semibold text-red-700">
            {journal.title}
          </div>
          <div className="collapse-content">
            <p className="italic text-sm">Published: {journal.date}</p>
            <p className="font-extralight">{journal.abstract}</p>
          </div>
          <div className="p-4 flex gap-4">
            <button
              onClick={() => setSelectedPdf(journal.pdfUrl)}
              className="inline-flex items-center text-blue-500 hover:text-blue-700"
            >
              <FileText className="w-4 h-4 mr-2" />
              Preview PDF
            </button>
            <a
              href={journal.pdfUrl}
              download
              className="inline-flex items-center text-green-500 hover:text-green-700"
            >
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </a>
          </div>
        </div>
      ))}
      {pdfUrl && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-auto relative">
            <button
              onClick={() => setSelectedPdf(null)}
              className="absolute top-2 right-2 p-2 hover:bg-gray-100 rounded-full z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="p-4 h-[80vh]">
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                <Viewer fileUrl={pdfUrl} />
              </Worker>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Publication;
