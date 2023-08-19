export const sum = (a,b) =>a+b;

const config = {
    presets: [["@babel/present-env",{ targets: {node: "current"}}]],
}