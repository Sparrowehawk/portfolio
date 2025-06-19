// src/components/Skills.tsx

import MotionDiv from "@/components/motion-div";
import MotionList from "@/components/motion-list";
import Image from "next/image";
// CHANGE: Import the StaticImageData type for correct typing of icons
import type { StaticImageData } from "next/image";

// --- Your Icon Imports ---
import pythonIcon from "@/components/assets/icons/python.png";
import javaIcon from "@/components/assets/icons/java.png";
import dockerIcon from "@/components/assets/icons/docker.png";
import gitIcon from "@/components/assets/icons/git.png";
import vscodeIcon from "@/components/assets/icons/vscode.png";
import davinciResolveIcon from "@/components/assets/icons/davinci-resolve.png";
import archLinux from "@/components/assets/icons/archLinux.svg";
import manjaro from "@/components/assets/icons/manjaro.svg";
import micro from "@/components/assets/icons/micro.svg";
import tensorFlow from "@/components/assets/icons/TensorFlow.svg";
import numPy from "@/components/assets/icons/NumPy.svg";
import affinityPhoto from "@/components/assets/icons/affinity-logo.svg";
import stm32cubeIde from "@/components/assets/icons/stm32Cube.png";
import ccs_studio from "@/components/assets/icons/CCS_icon.png";
import c_logo from "@/components/assets/icons/C_Logo.png";


// CHANGE: Renamed function from "skills" to "Skills" (PascalCase)
// and made it a default export for easier importing.
export function Skills() {
  const data = [
    {
      title: "DevOps",
      skills: [
        { name: "Git", icon: gitIcon },
        { name: "Docker", icon: dockerIcon },
      ],
    },
    {
      title: "Languages",
      skills: [
        { name: "C", icon: c_logo },
        { name: "Python", icon: pythonIcon },
        { name: "Java", icon: javaIcon },
      ],
    },
    {
      title: "Tools & Environment",
      skills: [
        { name: "Arch Linux", icon: archLinux },
        { name: "Manjaro", icon: manjaro },
        { name: "VS Code", icon: vscodeIcon },
        { name: "Micro", icon: micro },
        { name: "STM32 Cube IDE", icon: stm32cubeIde },
        { name: "Code Composer Studio", icon: ccs_studio },
        { name: "TensorFlow", icon: tensorFlow },
        { name: "NumPy", icon: numPy },
      ],
    },
    {
      title: "Visual",
      skills: [
        { name: "DaVinci Resolve", icon: davinciResolveIcon },
        { name: "Affinity Photo", icon: affinityPhoto },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="flex w-full flex-col items-center text-center font-mono"
    >
      <MotionDiv>
        <h2 className="mb-4">My Skills</h2>
      </MotionDiv>
      <div className="flex flex-wrap justify-center">
        {data.map((item, index) => (
          <MotionDiv key={index}>
            <div className="mb-6 md:px-2">
              <h3>{item.title}</h3>
              <MotionList className="flex flex-wrap justify-evenly gap-0 md:gap-5 md:px-6 lg:justify-center">
                {item.skills.map((skill) => (
                  <SkillCard key={skill.name} {...skill} />
                ))}
              </MotionList>
            </div>
          </MotionDiv>
        ))}
      </div>
    </section>
  );
}

// CHANGE: The type for 'icon' is now StaticImageData, not string.
function SkillCard({ icon, name }: { icon: StaticImageData; name: string }) {
  return (
    <div className="group rounded-xl border-none p-5 text-center shadow-none transition-all duration-200 ease-linear hover:scale-110 hover:drop-shadow-xl">
      <div className="flex flex-col items-center gap-2">
        <div className="flex h-16 w-16 items-center justify-center">
          {/* The Next.js Image component works perfectly with this setup */}
          <Image src={icon} alt={name} priority />
        </div>
        <p>{name}</p>
      </div>
    </div>
  );
}