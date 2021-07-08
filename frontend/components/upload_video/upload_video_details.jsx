import React from "react";
import CloseIcon from "@material-ui/icons/Close";

export default class UploadVideoDetails extends React.Component {
  render() {
    return (
      <div className="vid-upload">
        <header className="vid-upload__header">
          <span className="vid-upload__header__title ">Details</span>
          <div className="vid-upload__header__btns">
            <CloseIcon id="upload-close-btn" onClick={this.props.closeModal} />
          </div>
        </header>

        {/* <div id="line-container">
          <div id="circle-details-container">
            <p className="strong-p">Details</p>
            <div id="circle-details"></div>
          </div>
          <div id="circle-elements-container">
            <p className="strong-p">Elements</p>
            <div id="circle-elements"></div>
          </div>
          <div id="circle-visibility-container">
            <p className="strong-p">Visibility</p>
            <div id="circle-visibility"></div>
          </div>
        </div> */}

        <div>
          <form>
            <input
              type="text"
              id="video-upload-title-input"
              onChange={this.props.handleChange("title")}
              value={this.props.title}
              placeholder="Add a title that describes your video"
              required
            />
            <label>Title (required)</label>
            <textarea
              cols="30"
              rows="10"
              onChange={this.props.handleChange("description")}
              value={this.props.description}
              placeholder="Tell viewers about your video"
            ></textarea>
            <label>Description</label>
          </form>
          <div >
            <video height="170" width="303" controls>
              <source src={this.props.videoUrl} type="video/mp4" />
              <source src={this.props.videoUrl} type="video/ogg" />
              <source src={this.props.videoUrl} type="video/webm" />
              There was a problem rendering the video
            </video>
            <div >
              <div>
                <div>
                  <label>Video Link</label>
                  <a>Availble after successful upload</a>
                </div>
              </div>
              <div>
                <div>
                  <label>Filename</label>
                  <p>{this.props.fileName}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div>
            <p>Finished processing</p>
          </div>
          <button id="upload-video-submit-btn" onClick={this.handleSubmit}>
            {this.props.formType}
          </button>
        </footer>
      </div>
    );
  }
}
