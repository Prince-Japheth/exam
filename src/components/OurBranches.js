import React, { useState } from 'react';
import { banks } from "../constants";
import "../styles/bank.css";

const Bank = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedPost, setSelectedPost] = useState(null);
    const postsPerPage = 5;

    const totalPages = Math.ceil(banks.length / postsPerPage);

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleReadMore = (post) => {
        setSelectedPost(post);
    };

    const handleCloseModal = () => {
        setSelectedPost(null);
    };

    const currentPosts = banks.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Our Branches</h2>
            <hr />
            <div className="row">
                {currentPosts.map((post, index) => (
                    <div className="col mb-4" key={index}>
                        <div className="card branch-item">
                            <img className="card-img-top branch-image" src={post.imageUrl} alt={post.name} />
                            <div className="card-body branch-content">
                                <h5 className="card-title">{post.name}</h5>
                                <p className="card-text">{post.address}</p>
                                <button onClick={() => handleReadMore(post)} className="btn bg-blue-gradient">View Directions</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <br />
            <div className="pagination justify-content-center">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        className={`page-btn bg-blue-gradient ${currentPage === index + 1 ? 'active' : ''}`}
                        onClick={() => handleClick(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
            <br />


            {selectedPost && (
                <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{selectedPost.name}</h5>
                                <button type="button" className="close bg-blue-gradient" onClick={handleCloseModal}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                            <img className="card-img-top modal-branch-image" src={selectedPost.imageUrl} alt={selectedPost.name} />
                            <br /><br />
                                <p><b>{selectedPost.address}</b></p>
                                <p>{selectedPost.direction}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {selectedPost && <div className="modal-backdrop fade show"></div>}
        </div>
    );
};

export default Bank;