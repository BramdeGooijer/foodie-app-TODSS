import React, { StyleSheet, Image } from "react-native";
import glutenvrij from "../../../assets/allergyIcons/icoon-allergenen-glutenvrij.png";
import keto from "../../../assets/allergyIcons/icoon-allergenen-keto.png";
import notenvrij from "../../../assets/allergyIcons/icoon-allergenen-notenvrij.png";
import paleo from "../../../assets/allergyIcons/icoon-allergenen-paleo.png";
import raw from "../../../assets/allergyIcons/icoon-allergenen-raw.png";
import sojavrij from "../../../assets/allergyIcons/icoon-allergenen-sojavrij.png";
import zonderGeraffineerdeSuikers from "../../../assets/allergyIcons/icoon-allergenen-zonder-geraffineerde-suikers.png";
import zonderGranen from "../../../assets/allergyIcons/icoon-allergenen-zonder-granen.png";
import zonderOlie from "../../../assets/allergyIcons/icoon-allergenen-zonder-olie.png";
import zonderPeulvruchten from "../../../assets/allergyIcons/icoon-allergenen-zonder-peulvruchten.png";

const iconTypes = {
	gluten: glutenvrij,
	keto: keto,
	notenvrij: notenvrij,
	paleo: paleo,
	raw: raw,
	sojavrij: sojavrij,
	zonderGeraffineerdeSuikers: zonderGeraffineerdeSuikers,
	zonderGranen: zonderGranen,
	zonderOlie: zonderOlie,
	zonderPeulvruchten: zonderPeulvruchten,
};

export default function AllergyIcon({ type }) {
	console.log(type, iconTypes[type]);
	const imageUrl = iconTypes[type];
	return imageUrl ? (
		<Image key={`${type}`} style={styles.allergyIcon} source={imageUrl} />
	) : (
		<></>
	);
}

const styles = StyleSheet.create({
	allergyIcon: {
		width: 30,
		height: 30,
		marginRight: 5,
	},
});
