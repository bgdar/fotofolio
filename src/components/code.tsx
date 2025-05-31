import CodeSkill from "../codeCmpnt/CodeSkill";
import { useState } from "react";
import { TbHandFingerRight } from "react-icons/tb";
import CodeTextEditor from "../codeCmpnt/codeTextEditor";

export default function Code() {
  const [nextItem, setNextItem] = useState<number>(0);
  const [isNextItem, setIsNextItem] = useState<boolean>(false);

  const handleNext = () => {
    setNextItem((next) => next + 1);
    if (nextItem >= dataSkil.length - 1) {
      setNextItem(0);
    }
    setIsNextItem(false);
  };

  const handlePrev = () => {
    setNextItem((prev) => prev - 1);
    if (nextItem <= 0) {
      setNextItem(dataSkil.length - 1);
    }
    setIsNextItem(true);
  };
  return (
    <div id="code" className="section py-10 mb-12 mt-16">
      <div className="container mx-auto max-w-[800px] p-4">
        <div className="text-center">
          <h4 className="mb-5 text-4xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-900 shadow-lg">
            Code
          </h4>
          <div className=" flex gap-2 justify-center">
            <CodeSkill nextItem={nextItem} dataSkill={dataSkil} />
          </div>
        </div>

        <div className="flex justify-evenly">
          <div
            data-aos="fade-right"
            className="text-start m-4 rounded-lg  p-2 bg-slate-200 shadow-lg shadow-slate-400 w-[100%] font-mono"
          >
            <h3>
              <img
                src={dataSkil[nextItem].image}
                alt={dataSkil[nextItem].title}
                className="inline-block w-8 h-8 mr-2"
              />{" "}
              main{dataSkil[nextItem].ekstension}
            </h3>
          </div>

          <div className="flex justify-around p-4 gap-3 transition-all duration-300 ease-in-out">
            <button
              className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition"
              type="button"
              onClick={handlePrev}
            >
              {/* <span className="text-sm">Prev</span> */}
              Prev
            </button>

            <span
              className="transition-all duration-500 ease-in-out text-2xl flex items-center justify-center"
              style={{
                transform: `${
                  isNextItem ? "rotate(180deg)" : "rotate(-360deg)"
                }`,
              }}
            >
              {isNextItem ? (
                <TbHandFingerRight className="text-slate-100" />
              ) : (
                // <TbPlayerTrackPrevFilled />
                <TbHandFingerRight />
              )}
            </span>
            <button
              className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition"
              type="button"
              onClick={handleNext}
            >
              {/* <span className="text-sm">Next</span> */}
              Next
            </button>
          </div>
        </div>

        <div className="codeText">
          <CodeTextEditor
            code={dataSkil[nextItem].code}
            language={dataSkil[nextItem].language}
          />
        </div>
      </div>
    </div>
  );
}

type daftarSkill = {
  image: string;
  description: string;
  level: number; //tampilakan menjadi persentase
  source: string;
  ekstension?: string; //opsional, jika tidak ada ekstensi bisa di kosongkan
  title: string;
  language: string; // bahasa pemrograman
  code?: string; //opsional, jika tidak ada kode bisa di kosongkan
};

const dataSkil: daftarSkill[] = [
  {
    image: "./img/html.png",
    title: "HTML",
    language: "markup",
    ekstension: ".html",
    description:
      "HTML (HyperText Markup Language) adalah bahasa standar untuk membuat halaman web dan aplikasi web.",
    level: 80,
    source: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    code: `<html>
  <body>
    <h1>Hello, World!</h1>
  </body>
</html>`,
  },
  {
    image: "./img/css.png",
    title: "CSS",
    language: "css",
    ekstension: ".css",
    description:
      "CSS digunakan untuk mengatur tampilan halaman web seperti warna, layout, dan animasi.",
    level: 75,
    source: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    code: `h1 {
  color: blue;
  font-size: 24px;
}`,
  },
  {
    image: "./img/js.png",
    title: "JavaScript",
    language: "javascript",
    ekstension: ".js",
    description:
      "JavaScript digunakan untuk memberikan interaktivitas dalam halaman web.",
    level: 45,
    source: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    code: `const name = "dar"\nconsole.log("Hello, 'dar'!");`,
  },
  {
    image: "./img/typescript.png",
    title: "TypeScript",
    language: "typescript",
    ekstension: ".ts",
    description:
      "TypeScript adalah superset dari JavaScript yang memiliki sistem tipe statis.",
    level: 30,
    source: "https://www.typescriptlang.org/",
    code: `function greet(name: string): string {
  return \`Hello, \${name}!\`;
}`,
  },
  {
    image: "./img/python.png",
    title: "Python",
    language: "python",
    ekstension: ".py",
    description:
      "Python adalah bahasa tingkat tinggi yang terkenal karena sintaksnya yang sederhana.",
    level: 30,
    source: "https://www.python.org/",
    code: `print("Hello, Python!")`,
  },
  {
    image: "./img/go.png",
    title: "Go",
    language: "go",
    ekstension: ".go",
    description:
      "Go dikembangkan oleh Google, terkenal karena performa tinggi dan concurrency yang baik.",
    level: 20,
    source: "https://go.dev/",
    code: `package main

import "fmt"

func main() {
  fmt.Println("Hello, Go!")
}`,
  },
  {
    image: "./img/rust.png",
    title: "Rust",
    language: "rust",
    ekstension: ".rs",
    description:
      "Rust adalah bahasa pemrograman yang menitikberatkan pada performa dan keamanan memori.",
    level: 5,
    source: "https://www.rust-lang.org/",
    code: `fn main() {
  println!("Hello, Rust!");
}`,
  },
  {
    image: "./img/zig.png",
    title: "Zig",
    language: "zig",
    ekstension: ".zig",
    description:
      "Zig adalah bahasa modern dengan kontrol rendah, cocok untuk sistem level programming.",
    level: 3,
    source: "https://ziglang.org/",
    code: `const std = @import("std");

pub fn main() void {
  std.debug.print("Hello, Zig!\\n", .{});
}`,
  },
  {
    image: "./img/java.png",
    title: "Java",
    language: "java",
    ekstension: ".java",
    description:
      "Java adalah bahasa OOP populer yang berjalan di JVM dan banyak digunakan di enterprise.",
    level: 4.2,
    source: "https://www.java.com/en/",
    code: `public class Main {
  public static void main(String[] args) {
    System.out.println("Hello, Java!");
  }
}`,
  },
  {
    image: "./img/cpp.png",
    title: "C++",
    language: "cpp",
    ekstension: ".cpp",
    description:
      "C++ banyak digunakan dalam pengembangan game, sistem operasi, dan software performa tinggi.",
    level: 1.5,
    source: "https://isocpp.org/",
    code: `#include <iostream>

int main() {
  std::cout << "Hello, C++!" << std::endl;
  return 0;
}`,
  },
];
