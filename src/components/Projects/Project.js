import './Project.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../Spinner';

class Project extends React.Component {
  state = {
    isLoading: true,
  };

  handleOnLoad = () => {
    this.setState({
      isLoading: false,
    });
  };

  render() {
    const project = this.props.projectData;
    const { isLoading } = this.state;
    let shouldDisplayImage = isLoading ? 0 : null;

    return (
      <div className='card'>
        <Link
          to={{
            pathname: `/projectdescription/${project.id}`,
            state: {
              project: project,
            },
          }}
        >
          <div className='itemsProject'>
            {isLoading ? (
              <Spinner style={{ marginBottom: '4px' }} />
            ) : (
              <img
                className='projectPic'
                src={project.image}
                alt='project'
                onLoad={this.handleOnLoad}
                style={{ opacity: shouldDisplayImage }}
              />
            )}
            <div className='description'>
              <h3>{project.name}</h3>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default Project;
