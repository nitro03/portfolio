import React from 'react';
import {motion} from 'framer-motion';
import TileImage from "./TileImage";
import classNames from "classnames";
import LinkBtn from "../../LinkBtn/LinkBtn";

const Tile = (props) => {
    const {id, size, description, title, imgSrc, link, isMobile, onClick, isExpanded, alt} = props;

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
            return (
                <LinkBtn link={link}/>
            )
        }
    };

    const renderDescription = () => {
        if (isExpanded) {
            const tileCDescriptionClasses = classNames("tile_description", {
                'isExpanded': isExpanded
            });
            return (
                <motion.div className={tileCDescriptionClasses}>
                    <motion.h3>{title}</motion.h3>
                    <motion.p>{description}</motion.p>
                    {renderLink()}
                </motion.div>
            );
        }
        return null;
    }

    return (
        <div className={tileContainerClasses} onClick={handleClick}>
            <div className={tilePhotoClasses}>
                <TileImage isExpanded={isExpanded} imgSrc={imgSrc} alt={alt}/>
            </div>
            <motion.div layout={"size"}>
                {renderDescription()}
            </motion.div>
        </div>
    );
};

export default Tile;