import { DOMNode, domToReact } from "html-react-parser"

export default function replace(domNode: DOMNode, index: number) {
    if(domNode instanceof Element && domNode.attributes){
        if(domNode.tagName === "h3"){
            return (
                <h3 {...domNode.attributes} className="text-black">
                    {domToReact(domNode.childNodes as DOMNode[])}
                </h3>
            )
        }else if(domNode.tagName === "h2"){
            return (
                <h2 {...domNode.attributes} className="text-secondary-content">
                    {domToReact(domNode.childNodes as DOMNode[])}
                </h2>
            )
        } else if(domNode.tagName === "strong") {
            return (
                <strong {...domNode.attributes} className="text-secondary-content">
                    {domToReact(domNode.childNodes as DOMNode[])}
                </strong>
            )
        }else if(domNode.tagName === "h1"){
            return (
                <h1 {...domNode.attributes} className="text-secondary-content">
                    {domToReact(domNode.childNodes as DOMNode[])}
                </h1>
            )
        }
    }
}