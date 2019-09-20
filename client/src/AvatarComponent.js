import React from "react";
import Avatar from "@material-ui/core/Avatar";

const AvatarComponent = props => {
  if (props.username === "currentuser") {
    return (
      <Avatar style={{ padding: "2px", backgroundColor: "#4b0082" }}>
        <svg
          width="174"
          height="174"
          viewBox="0 0 174 174"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>better-icon</title>
          <path
            d="M79.866 26.627l-17.27-6.399L10 62.557v66.589l52 22.669V85.226l51-41.795 51 41.795v66.589l-52-22.669V95"
            strokeWidth="20"
            stroke="#FFF"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </Avatar>
    );
  } else {
    return <Avatar alt={props.alt} src={props.src} />;
  }
};

export default AvatarComponent;
