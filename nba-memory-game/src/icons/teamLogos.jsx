import React from "react";
import {
	clippersLogo,
	pacersLogo,
	sixersLogo,
	blazersLogo,
	bucksLogo,
	bullsLogo,
	cavsLogo,
	celticsLogo,
	grizzliesLogo,
	hawksLogo,
	heatLogo,
	hornetsLogo,
	jazzLogo,
	kingsLogo,
	knicksLogo,
	lakersLogo,
	magicLogo,
	mavsLogo,
	netsLogo,
	nuggetsLogo,
	pelicansLogo,
	pistonsLogo,
	raptorsLogo,
	rocketsLogo,
	spursLogo,
	sunsLogo,
	thunderLogo,
	timberwolvesLogo,
	warriorsLogo,
	wizardsLogo,
} from "../assets";

// HEAT LOGO IS TOO SMALL

const logoSize = 100;

// make img dimensions into variables in case we want to change them later

function Clippers() {
	return <img src={clippersLogo} alt="Clippers Logo" width={logoSize} height={logoSize} />;
}

function Pacers() {
	return <img src={pacersLogo} alt="Pacers Logo" width={logoSize} height={logoSize} />;
}

function Sixers() {
	return <img src={sixersLogo} alt="Sixers Logo" width={logoSize} height={logoSize} />;
}

function Blazers() {
  return <img src={blazersLogo} alt="Blazers Logo" width={logoSize} height={logoSize} />;
}

function Bucks() {
  return <img src={bucksLogo} alt="Bucks Logo" width={logoSize} height={logoSize} />;
}

function Bulls() {
  return <img src={bullsLogo} alt="Bulls Logo" width={logoSize} height={logoSize} />;
}

function Cavs() {
  return <img src={cavsLogo} alt="Cavs Logo" width={logoSize} height={logoSize} />;
}

function Celtics() {
  return <img src={celticsLogo} alt="Celtics Logo" width={logoSize} height={logoSize} />;
}

function Grizzlies() { 
  return <img src={grizzliesLogo} alt="Grizzlies Logo" width={logoSize} height={logoSize} />;
}

function Hawks() {
  return <img src={hawksLogo} alt="Hawks Logo" width={logoSize} height={logoSize} />;
}

function Heat() {
  return <img src={heatLogo} alt="Heat Logo" width={225} height={225} />;		// imported png too small, find larger image?
}

function Hornets() {
  return <img src={hornetsLogo} alt="Hornets Logo" width={logoSize} height={logoSize} />;
}

function Jazz() {
  return <img src={jazzLogo} alt="Jazz Logo" width={logoSize} height={logoSize} />;
}

function Kings() {
  return <img src={kingsLogo} alt="Kings Logo" width={logoSize} height={logoSize} />;
}

function Knicks() {
  return <img src={knicksLogo} alt="Knicks Logo" width={logoSize} height={logoSize} />;
}

function Lakers() {
  return <img src={lakersLogo} alt="Lakers Logo" width={logoSize} height={logoSize} />;
}

function Magic() {
  return <img src={magicLogo} alt="Magic Logo" width={logoSize} height={logoSize} />;
}

function Mavs() {
  return <img src={mavsLogo} alt="Mavs Logo" width={logoSize} height={logoSize} />;
}

function Nets() {
  return <img src={netsLogo} alt="Nets Logo" width={logoSize} height={logoSize} />;
}

function Nuggets() {
  return <img src={nuggetsLogo} alt="Nuggets Logo" width={logoSize} height={logoSize} />;
}

function Pelicans() {
  return <img src={pelicansLogo} alt="Pelicans Logo" width={logoSize} height={logoSize} />;
}

function Pistons() {
  return <img src={pistonsLogo} alt="Pistons Logo" width={logoSize} height={logoSize} />;
}

function Raptors() {
  return <img src={raptorsLogo} alt="Raptors Logo" width={logoSize} height={logoSize} />;
}

function Rockets() {
  return <img src={rocketsLogo} alt="Rockets Logo" width={logoSize} height={logoSize} />;
}

function Spurs() {
  return <img src={spursLogo} alt="Spurs Logo" width={logoSize} height={logoSize} />;
}

function Suns() {
  return <img src={sunsLogo} alt="Suns Logo" width={logoSize} height={logoSize} />;
}

function Thunder() {
  return <img src={thunderLogo} alt="Thunder Logo" width={logoSize} height={logoSize} />;
}

function Timberwolves() {
  return <img src={timberwolvesLogo} alt="Timberwolves Logo" width={logoSize} height={logoSize} />;
}

function Warriors() {
  return <img src={warriorsLogo} alt="Warriors Logo" width={logoSize} height={logoSize} />;
}

function Wizards() {
  return <img src={wizardsLogo} alt="Wizards Logo" width={logoSize} height={logoSize} />;
}

const TeamLogos = {
	"Clippers": Clippers,
	"Pacers": Pacers,
	"76ers": Sixers,
	"Trail Blazers": Blazers,
	"Bucks": Bucks,
	"Bulls": Bulls,
	"Cavaliers": Cavs,
	"Celtics": Celtics,
	"Grizzlies": Grizzlies,
	"Hawks": Hawks,
	"Heat": Heat,
	"Hornets": Hornets,
	"Jazz": Jazz,
	"Kings": Kings,
	"Knicks": Knicks,
	"Lakers": Lakers,
	"Magic": Magic,
	"Mavericks": Mavs,
	"Nets": Nets,
	"Nuggets": Nuggets,
	"Pelicans": Pelicans,
	"Pistons": Pistons,
	"Raptors": Raptors,
	"Rockets": Rockets,
	"Spurs": Spurs,
	"Suns": Suns,
	"Thunder": Thunder,
	"Timberwolves": Timberwolves,
	"Warriors": Warriors,
	"Wizards": Wizards,
}


export default TeamLogos
