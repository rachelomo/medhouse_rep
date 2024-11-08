import axios from "axios";
import React, { Component } from "react";

class App extends Component {
    state = {
        selectedFile: null,
        isUploading: false,
        uploadStatus: null,
    };

    onFileChange = (event) => {
        this.setState({
            selectedFile: event.target.files[0],
            uploadStatus: null, // Reset upload status on new file selection
        });
    };

    onFileUpload = () => {
        if (!this.state.selectedFile) {
            this.setState({
                uploadStatus: "Please select a file first!",
            });
            return;
        }

        const formData = new FormData();
        formData.append("myFile", this.state.selectedFile, this.state.selectedFile.name);

        // Start uploading
        this.setState({ isUploading: true });

        axios
            .post("api/uploadfile", formData)
            .then((response) => {
                this.setState({
                    isUploading: false,
                    uploadStatus: "File uploaded successfully!",
                });
            })
            .catch((error) => {
                this.setState({
                    isUploading: false,
                    uploadStatus: "File upload failed. Please try again.",
                });
                console.error("Error uploading file:", error);
            });
    };

    fileData = () => {
        if (this.state.selectedFile) {
            return (
                <div>
                    <h2>File Details:</h2>
                    <p>File Name: {this.state.selectedFile.name}</p>
                    <p>File Type: {this.state.selectedFile.type}</p>
                    <p>
                        Last Modified: {this.state.selectedFile.lastModifiedDate.toDateString()}
                    </p>
                </div>
            );
        } else {
            return null;
        }
    };

    render() {
        const { isUploading, uploadStatus } = this.state;

        return (
            <div>
                <div className="border-2 border-blue-700 border-dashed p-10 mt-8 flex justify-center">
                    <input type="file" onChange={this.onFileChange} />
                    <button
                        className="p-2 bg-blue-900 text-white rounded"
                        onClick={this.onFileUpload}
                        disabled={isUploading}
                    >
                        {isUploading ? "Uploading..." : "Upload!"}
                    </button>
                </div>
                {this.fileData()}
                {uploadStatus && (
                    <div className="mt-4 text-center">
                        <p>{uploadStatus}</p>
                    </div>
                )}
            </div>
        );
    }
}

export default App;
