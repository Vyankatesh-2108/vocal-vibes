import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./index.css";


const Tree = ({ data = [] }) => {
  return (
    <div className="d-tree">
      <ul className="d-flex d-tree-container flex-column">
        {data.map((tree) => (
          <TreeNode node={tree} />
        ))}
      </ul>
    </div>
  );
};

const TreeNode = ({ node }) => {
  
  const [childVisible, setChildVisiblity] = useState(false);

  const hasChild = node.children ? true : false;

  const handleDownload = (e, fileUrl, fileName) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <li className="d-tree-node border-0">
      <div className="d-flex" onClick={(e) => setChildVisiblity((v) => !v)}>
        {hasChild && (
          <div
            className={`d-inline d-tree-toggler ${
              childVisible ? "active" : ""
            }`}
          >
            <FontAwesomeIcon icon="caret-right" />
          </div>
        )}

        <div>
        <i className={`${node.icon}`} style={{color: "#FFD43B",marginRight:'5px'}}> </i>
          {hasChild ? (
            <span>{node.label}</span>
          ) : (
            <a href={node.fileUrl} onClick={(e) => handleDownload(e, node.fileUrl, node.label)}>
              {node.label}
            </a>
          )}
          
        </div>
      </div>

      {hasChild && childVisible && (
        <div className="d-tree-content">
          <ul className="d-flex d-tree-container flex-column">
            <Tree data={node.children} />
          </ul>
        </div>
      )}
    </li>
  );
};

export default Tree;
