import React from 'react';
import './Post.css';
import gallery from '../assets/gallery.png'; // Use this image as one of the post images
import Navigate from './Navigate/Navigate';

const LatestPosts = ({blog}) => {
    return (
        <div className="latest-posts-section">
            <div className="header">
                <h2>Latest Posts</h2>
                <button onClick={blog} className="view-all-btn">View all blogs</button>
            </div>
            <div className="posts-container">
                <div className="main-post">
                    <img src={gallery} alt="Main Post" className="main-post-image" />
                    <div className="main-post-content">
                        <p className="post-meta">Hostel Sewa | 1 April 2024</p>
                        <h3 className="post-title">Nepal Hostel Association 6th Meet</h3>
                    </div>
                </div>
                <div className="side-posts">
                    <div className="side-post">
                        <img src={gallery} alt="Post 1" className="side-post-image" />
                        <div className="side-post-content">
                            <p className="post-meta">Travel Guide | 27 March 2024</p>
                            <h4 className="side-post-title">Hostel Monitor By Sub-Metro Itahari</h4>
                        </div>
                    </div>
                    <div className="side-post">
                        <img src={gallery} alt="Post 2" className="side-post-image" />
                        <div className="side-post-content">
                            <p className="post-meta">Harmomart | 20 March 2024</p>
                            <h4 className="side-post-title">Better Hostel Management</h4>
                        </div>
                    </div>
                    <div className="side-post">
                        <img src={gallery} alt="Post 3" className="side-post-image" />
                        <div className="side-post-content">
                            <p className="post-meta">Bhojindra Shrestha | 15 March 2024</p>
                            <h4 className="side-post-title">11th Anniversary Celebration</h4>
                        </div>
                    </div>
                   
        
                </div>
            </div>
            <div className="gap"></div>
        </div>
    );
};

export default Navigate(LatestPosts);
