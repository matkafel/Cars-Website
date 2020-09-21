import React, { useEffect, useRef } from 'react';
import { Banner, Video, Canvas, BannerTitle, Headline } from './HomeBaner.style';
import useWindowSize from '../Home/hooks/useWindowSize';
import Header from '../Header/Header';

const HomeBaner = () => {
    const size = useWindowSize()
    let canvas = useRef(null)

    useEffect(() => {
        let renderingElement = canvas.current
        let drawingElement = renderingElement.cloneNode()
        let drawingCtx = drawingElement.getContext("2d")
        let renderingCtx = renderingElement.getContext("2d")
        let lastX
        let lastY
        let moving = false

        renderingCtx.globalCompositeOperation = "source-over"
        renderingCtx.fillStyle = "#000000";
        renderingCtx.fillRect(0, 0, size.width, size.height)

        renderingElement.addEventListener("mouseover", ev => {
            moving = true
            lastX = ev.pageX - renderingElement.offsetLeft
            lastY = ev.pageY - renderingElement.offsetTop
        })

        renderingElement.addEventListener("click", ev => {
            moving = true
            lastX = ev.pageX - renderingElement.offsetLeft
            lastY = ev.pageY - renderingElement.offsetTop
        })

        renderingElement.addEventListener("mouseup", ev => {
            moving = false
            lastX = ev.pageX - renderingElement.offsetLeft
            lastY = ev.pageY - renderingElement.offsetTop
        })

        renderingElement.addEventListener("mousemove", ev => {
            if (moving) {
                drawingCtx.globalCompositeOperation = "source-over"
                renderingCtx.globalCompositeOperation = "destination-out"
                let currentX = ev.pageX - renderingElement.offsetLeft
                let currentY = ev.pageY - renderingElement.offsetTop
                drawingCtx.lineJoin = "round"
                drawingCtx.moveTo(lastX, lastY)
                drawingCtx.lineTo(currentX, currentY)
                drawingCtx.closePath()
                drawingCtx.lineWidth = 100
                drawingCtx.stroke()
                lastX = currentX
                lastY = currentY
                renderingCtx.drawImage(drawingElement, 0, 0)
            }
        })
    }, [])



    return (
        <Banner>
            <Header />
            <Video> <video height="100%" width="100%" loop autoPlay src={require('../../images/movie.mp4')} />
            </Video>
            <Canvas height={size.height} width={size.width} ref={canvas} />
            <BannerTitle>
                <Headline>Search</Headline>
                <Headline>Your</Headline>
                <Headline>Car</Headline>
            </BannerTitle>
        </Banner>
    )
}

export default HomeBaner
