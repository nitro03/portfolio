import React from 'react';
import TileImage from "./TileImage";
import classNames from "classnames";
import {Button} from "react-bootstrap";

const Tile = (props) => {
    const {id, size, description, title, imgSrc, link, isMobile, onClick, isExpanded} = props;

    const tileContainerClasses = classNames("tile_container", {
        'mobile': isMobile,
        'isExpanded': isExpanded
    });
    const tilePhotoClasses = classNames("tile_photo", {
        'mobile': isMobile,
        'md': size === 'md',
        'lg': size === 'lg'
    });

    const handleClick = () => {
        if (typeof onClick === 'function') {
            onClick(id);
        }
    }

    const renderLink = () => {
        if (link) {
            return (<Button variant="link" href={link} className="link">Link</Button>)
        }
    };

    const renderDescription = () => {
        // if (isExpanded) {
            const tileCDescriptionClasses = classNames("tile_description", {
                'isExpanded': isExpanded
            });
            return(
            <div className={tileCDescriptionClasses}>
                <h3>{title}</h3>
                <p>{description}</p>
                {renderLink()}
            </div>);
        // }
    }

    return (
        <div className={tileContainerClasses} onClick={handleClick}>
            <div className={tilePhotoClasses}>
                <TileImage isExpanded={isExpanded} imgSrc={imgSrc}/>
            </div>
            {renderDescription()}
        </div>
    );
};

export default Tile;