import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./RTF.png"
								alt="Royal Trust Futures"
								className="work-image"
							/>
							<div className="work-title">PT. Royal Trust Futures</div>
							<div className="work-subtitle">
							Management Tech Trainee
							</div>
							<div className="work-duration">May 2024 - Aug 2024</div>
						</div>

						<div className="work">
							<img
								src="./TTI.png"
								alt="Toyota Tsusho Indonesia"
								className="work-image"
							/>
							<div className="work-title">PT. Toyota Tsusho Indonesia</div>
							<div className="work-subtitle">
								IT Support
							</div>
							<div className="work-duration">Feb 2021 - Feb 2022</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
