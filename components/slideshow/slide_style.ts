import styled from "styled-components"

export const Slides = styled.div`
    :root {
	 --duration: 30s;
	 --delay: 15s;
}

	 background-color: black;
	 animation: shrink var(--duration) var(--delay) linear infinite;
	 position: relative;
	 margin: 0 auto;
	 padding: 0 1rem;
	 width: 90vw;
	 height: 70vh;
	 overflow: hidden;
	 animation: spin var(--duration) var(--delay) linear infinite;
	 transform-style: preserve-3d;
	 perspective: 25rem;
}
 img {
	 --duration: 40s;
	 --name: float-up-1;
	 position: absolute;
	 top: 0;
	 left: 0;
	 width: 33vw;
	 transform: translateY(200vh);
	 animation: var(--name) var(--duration) linear infinite;
	 box-shadow: 1px 3px 15px rgba(0, 0, 0, 0.5);
	 z-index: 1;
}
 img:nth-child(1) {
	 animation-delay: 0s;
}
 img:nth-child(2) {
	 animation-delay: -3s;
}
 img:nth-child(3) {
	 animation-delay: -6s;
}
 img:nth-child(4) {
	 animation-delay: -9s;
}
 img:nth-child(5) {
	 animation-delay: -12s;
}
 img:nth-child(6) {
	 animation-delay: -15s;
}
 img:nth-child(7) {
	 animation-delay: -18s;
}
 img:nth-child(8) {
	 animation-delay: -21s;
}
 img:nth-child(9) {
	 animation-delay: -24s;
}
 img:nth-child(10) {
	 animation-delay: -27s;
}
 img:nth-child(1) {
	 --name: float-up-1;
	 --duration: calc(20s * 1);
	 left: 0vw;
	 z-index: -1;
}
 img:nth-child(2) {
	 --name: float-up-3;
	 --duration: calc(20s * 3);
	 left: 10vw;
	 z-index: -3;
}
 img:nth-child(3) {
	 --name: float-up-2;
	 --duration: calc(20s * 2);
	 left: 90vw;
	 z-index: -2;
}
 img:nth-child(4) {
	 --name: float-up-1;
	 --duration: calc(20s * 1);
	 left: 36vw;
	 z-index: -1;
}
 img:nth-child(5) {
	 --name: float-up-3;
	 --duration: calc(20s * 3);
	 left: 62vw;
	 z-index: -3;
}
 img:nth-child(6) {
	 --name: float-up-2;
	 --duration: calc(20s * 2);
	 left: 15vw;
	 z-index: -2;
}
 img:nth-child(7) {
	 --name: float-up-2;
	 --duration: calc(20s * 2);
	 left: 55vw;
	 z-index: -2;
}
 img:nth-child(8) {
	 --name: float-up-3;
	 --duration: calc(20s * 3);
	 left: -20vw;
	 z-index: -3;
}
 img:nth-child(9) {
	 --name: float-up-1;
	 --duration: calc(20s * 1);
	 left: 68vw;
	 z-index: -1;
}
 img:nth-child(10) {
	 --name: float-up-2;
	 --duration: calc(20s * 2);
	 left: 0vw;
	 z-index: -2;
}
 @keyframes float-up-3 {
	 from {
		 transform: translateY(200vh) translateZ(-50vh);
	}
	 to {
		 transform: translateY(-200vh) translateZ(-50vh);
	}
}
 @keyframes float-up-2 {
	 from {
		 transform: translateY(150vh) translateZ(-25vh);
	}
	 to {
		 transform: translateY(-150vh) translateZ(-25vh);
	}
}
 @keyframes float-up-1 {
	 from {
		 transform: translateY(100vh);
	}
	 to {
		 transform: translateY(-100vh);
	}
}
 @keyframes spin {
	 10%, 100% {
		 transform: rotateY(360deg);
	}
}
 @keyframes shrink {
	 0% {
		 transform: scale(1) translateX(0);
	}
	 2.5% {
		 transform: scale(0.75) translateX(5%);
	}
	 7.5% {
		 transform: scale(0.75) translateX(-5%);
	}
	 10%, 100% {
		 transform: scale(1);
	}
}
  @media (max-width: 720px) {
      height: 70vh;
  }
`