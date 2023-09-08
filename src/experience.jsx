import React from 'react'
import {
    Progress,
} from "@material-tailwind/react";
function Experience() {
  return (
    <div>
        <div className="p-8 bg-gray-400 w-full">
        <h1 className="font-bold text-3xl">Professional Skills</h1>
        <div className="flex pt-8 gap-4">
          <div className="w-full">
            <h3 className="text-xl font-semibold">HTML</h3>
            <Progress value={100} label="&nbsp;" />
          </div>
          <div className="w-full">
            <h3 className="text-xl font-semibold">Brain</h3>
            <Progress value={100} label="&nbsp;" />
          </div>
        </div>
        <div className="flex pt-8 gap-4">
          <div className="w-full">
            <h3 className="text-xl font-semibold">JS</h3>
            <Progress value={30} label="&nbsp;" />
          </div>
          <div className="w-full">
            <h3 className="text-xl font-semibold">Node</h3>
            <Progress value={60} label="&nbsp;" />
          </div>
        </div>
        <div className="flex pt-8 gap-4">
          <div className="w-full">
            <h3 className="text-xl font-semibold">CSS</h3>
            <Progress value={85} label="&nbsp;" />
          </div>
          <div className="w-full">
            <h3 className="text-xl font-semibold">React</h3>
            <Progress value={90} label="&nbsp;" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience;