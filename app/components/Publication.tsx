"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Download, FileText, X } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { publicationVariants } from "../motion";

import { journals } from "@/app/utils/data";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Publication = ({ useWhileInView }: any) => {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [openItem, setOpenItem] = useState<string | null>(null); // Track open accordion item

  useEffect(() => {
    if (selectedPdf) {
      const fullUrl = `${window.location.origin}${selectedPdf}`;
      setPdfUrl(fullUrl);
    } else {
      setPdfUrl(null);
    }
  }, [selectedPdf]);

  return (
    <motion.div
      variants={publicationVariants}
      initial="hidden"
      {...(useWhileInView
        ? { whileInView: "visible", viewport: { once: true, amount: 0.6 } }
        : { animate: "visible" })}
      className="space-y-4 relative z-10 pb-2"
    >
      {/* Controlled Accordion */}
      <Accordion
        type="single"
        collapsible
        value={openItem ?? undefined}
        onValueChange={(value) => setOpenItem(value)}
        className="drop-shadow-xl rounded-2xl bg-[#F7F3ED] p-6"
      >
        {journals.map((journal) => (
          <AccordionItem key={journal.id} value={journal.id}>
            <AccordionTrigger className="text-lg">
              {journal.title}
            </AccordionTrigger>
            <AccordionContent className="text-base">
              <p>{journal.abstract}</p>
              <p>{journal.date}</p>
              <div className="py-4 flex gap-4">
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
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

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
    </motion.div>
  );
};

export default Publication;
