import React from "react"

export const Layout = (props: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center h-screen gap-4 font-mono py-10">
      {props.children}
    </div>
  )
}
