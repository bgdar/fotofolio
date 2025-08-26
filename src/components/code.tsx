import CodeSkill from "../codeCmpnt/CodeSkill";
import React, { useState } from "react";
import { TbBrandCpp, TbHandFingerRight } from "react-icons/tb";
import CodeTextEditor from "../codeCmpnt/codeTextEditor";

import { useGlobalState } from "../globalState";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io5";
import { FaHtml5, FaRust } from "react-icons/fa";
import { SiPython, SiTypescript, SiZig } from "react-icons/si";
import { FaGolang, FaJava } from "react-icons/fa6";

export default function Code() {
  const [nextItem, setNextItem] = useState<number>(0);
  const [isNextItem, setIsNextItem] = useState<boolean>(false);

  const { theme } = useGlobalState();

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
            className={`${
              theme === "light" ? "bg-slate-100" : "bg-slate-800"
            } text-start m-4 rounded-lg  p-2 shadow-lg shadow-slate-400 w-[100%] font-mono`}
          >
            <h3>
              {/* <img
                src={dataSkil[nextItem].logo}
                alt={dataSkil[nextItem].title}
                className="inline-block w-8 h-8 mr-2"
              />{" "}  */}
              <div className="inline-block w-8 h-8 mr-2">
                {dataSkil[nextItem].logo}
              </div>
              main{dataSkil[nextItem].ekstension}
            </h3>
          </div>

          <div className="flex justify-around items-center w-full max-w-screen-lg px-4 gap-2 transition-all duration-300 ease-in-out">
            <button
              className="flex-1 min-w-0 px-[2vw] py-[1.2vw] bg-gray-700 text-white rounded-md hover:bg-gray-800 text-[3vw] sm:text-base transition"
              onClick={handlePrev}
              type="button"
            >
              Prev
            </button>

            <span
              className="text-[6vw] sm:text-2xl transition-all duration-500 ease-in-out flex items-center justify-center"
              style={{
                transform: `${
                  isNextItem ? "rotate(180deg)" : "rotate(-360deg)"
                }`,
              }}
            >
              {isNextItem ? (
                <TbHandFingerRight className="text-slate-100" />
              ) : (
                <TbHandFingerRight />
              )}
            </span>

            <button
              className="flex-1 min-w-0 px-[2vw] py-[1.2vw] bg-gray-700 text-white rounded-md hover:bg-gray-800 text-[3vw] sm:text-base transition"
              onClick={handleNext}
              type="button"
            >
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
  logo: React.JSX.Element;
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
    logo: (
      <FaHtml5 className="w-full h-full bg-gradient-to-tr from-orange-500 to-red-600" />
    ),
    title: "HTML",
    language: "markup",
    ekstension: ".html",
    description:
      "HTML (HyperText Markup Language) adalah bahasa standar untuk membuat halaman web dan aplikasi web.",
    level: 80,
    source: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    code: `<html>
  <head>
    <title>Hello HTML</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p> its hard</p>
  </body>
</html>`,
  },
  {
    logo: (
      <IoLogoCss3 className="w-full h-full bg-gradient-to-tr from-blue-400 to-blue-600" />
    ),
    title: "CSS",
    language: "css",
    ekstension: ".css",
    description:
      "CSS digunakan untuk mengatur tampilan halaman web seperti warna, layout, dan animasi.",
    level: 75,
    source: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    code: `body {
  background: linear-gradient(to right, #4facfe, #00f2fe);
}

h1 {
  color: white;
  text-align: center;
}`,
  },
  {
    logo: (
      <IoLogoJavascript className="w-full h-full text-yellow-400 g-gradient-to-tr from-yellow-300 to-yellow-500" />
    ),
    title: "JavaScript",
    language: "javascript",
    ekstension: ".js",
    description:
      "JavaScript digunakan untuk memberikan interaktivitas dalam halaman web.",
    level: 45,
    source: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    code: `const name = "Dar";
function greet(user) {
  console.log(\`Hello, \${user}!\`);
}
setTimeout(() => greet(name), 1000);`,
  },
  {
    logo: (
      <SiTypescript className="w-full h-full bg-gradient-to-tr from-blue-400 to-blue-700" />
    ),
    title: "TypeScript",
    language: "typescript",
    ekstension: ".ts",
    description:
      "TypeScript adalah superset dari JavaScript yang memiliki sistem tipe statis.",
    level: 30,
    source: "https://www.typescriptlang.org/",
    code: `function greet(name: string): string {
  return \`Hello, \${name}!\`;
}

const msg: string = greet("Typescript");
console.log(msg);`,
  },
  {
    logo: (
      <SiPython className="w-full h-full bg-gradient-to-tr from-yellow-400 to-blue-600" />
    ),
    title: "Python",
    language: "python",
    ekstension: ".py",
    description:
      "Python adalah bahasa tingkat tinggi yang terkenal karena sintaksnya yang sederhana.",
    level: 30,
    source: "https://www.python.org/",
    code: `def greet(name: str) -> str:
    return f"Hello, {name}"

print(greet("Python"))
for i in range(3):
    print("Loop", i)`,
  },
  {
    logo: (
      <FaGolang className="w-full h-full bg-gradient-to-tr from-cyan-400 to-sky-500" />
    ),
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
  for i := 1; i <= 3; i++ {
    fmt.Println("Hello Go", i)
  }
}`,
  },
  {
    logo: (
      <FaRust className="w-full h-full bg-gradient-to-tr from-orange-600 to-gray-900" />
    ),
    title: "Rust",
    language: "rust",
    ekstension: ".rs",
    description:
      "Rust adalah bahasa pemrograman yang menitikberatkan pada performa dan keamanan memori.",
    level: 5,
    source: "https://www.rust-lang.org/",
    code: `fn main() {
  let nums = vec![1, 2, 3];
  for n in nums {
    println!("Rust says: {}", n);
  }
}`,
  },
  {
    logo: (
      <SiZig className="w-full h-full bg-gradient-to-tr from-yellow-300 to-orange-500" />
    ),
    title: "Zig",
    language: "zig",
    ekstension: ".zig",
    description:
      "Zig adalah bahasa modern dengan kontrol rendah, cocok untuk sistem level programming.",
    level: 3,
    source: "https://ziglang.org/",
    code: `const std = @import("std");

pub fn main() void {
  for (0..3) |i| {
    std.debug.print("Hello Zig {d}\\n", .{i});
  }
}`,
  },
  {
    logo: (
      <TbBrandCpp className="w-full h-full bg-gradient-to-tr from-blue-500 to-indigo-700" />
    ),
    title: "C++",
    language: "cpp",
    ekstension: ".cpp",
    description:
      "C++ adalah bahasa pemrograman populer untuk sistem, game, dan aplikasi performa tinggi.",
    level: 4.2,
    source: "https://isocpp.org/",
    code: `#include <iostream>
using namespace std;

int main() {
  int x = 42;
  int* ptr = &x;
  cout << "Value: " << *ptr << endl;
}`,
  },
  {
    logo: (
      <FaJava className="w-full h-full bg-gradient-to-tr from-orange-500 to-red-600 " />
    ),
    title: "Java",
    language: "java",
    ekstension: ".java",
    description:
      "Java adalah bahasa OOP populer yang berjalan di JVM dan banyak digunakan di enterprise.",
    level: 4,
    source: "https://www.java.com/en/",
    code: `public class Main {
  public static void main(String[] args) {
    for(int i=0;i<3;i++) {
      System.out.println("Hello Java " + i);
    }
  }
}`,
  },
];
