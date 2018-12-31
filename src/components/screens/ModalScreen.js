import React from "react";
import history from "../../history";
import Modal from "../Modal";

const ModalScreen = props => {
  const {
    description,
    image,
    link,
    linkDescription,
    name,
    technologies
  } = props.location.state.project;

  return (
    <Modal
      description={description}
      image={image}
      link={link}
      linkDescription={linkDescription}
      name={name}
      technologies={technologies}
      onDismiss={() => history.push("/projects")}
    />
  );
};

export default ModalScreen;
