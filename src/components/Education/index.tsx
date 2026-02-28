"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export const Education = () => {
  return (
    <section
      id="formacao"
      className="py-28 px-6 border-t border-border/50"
    >
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="font-heading text-3xl md:text-4xl font-bold mb-10"
          >
            Formação Acadêmica
          </motion.h2>

          <motion.div
            variants={fadeUp}
            custom={2}
            className="bg-card/50 border border-border rounded-lg p-6 hover:border-primary/40 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              
              <div>
                <h3 className="font-heading font-semibold text-lg">
                  Análise e Desenvolvimento de Sistemas
                </h3>

                <p className="text-sm text-muted-foreground">
                  FATEC | Mogi das Cruzes
                </p>
              </div>

              <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400 w-fit">
                Concluído | 2024
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};