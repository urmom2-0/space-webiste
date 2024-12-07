export default function Sidebar({ handleToggleModal, data }) {
    return (
        <div className="sidebar">
            {/* Background overlay to close sidebar */}
            <div onClick={handleToggleModal} className="bgoverlay"></div>
            
            {/* Sidebar content */}
            <div className="sidebarcontent">
                <h2>{data?.title || "Default Title"}</h2>
                <div className="descriptioncontainer">
                    {/* Display date with a fallback */}
                    <p className="descriptiontitle">
                        {data?.date || "No date provided"}
                    </p>
                    <p>{data?.explanation || "No description available."}</p>
                </div>
                <button onClick={handleToggleModal} aria-label="Close sidebar">
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    );
}
