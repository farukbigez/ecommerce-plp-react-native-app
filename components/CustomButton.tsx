import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

interface CustomButtonProps {
	onPress: () => void
	title: string
	textStyles?: object
	containerStyles?: object
}

export function CustomButton({ onPress, title, textStyles = {}, containerStyles = {} }: CustomButtonProps) {
	return (
		<TouchableOpacity
			activeOpacity={0.7}
			onPress={onPress}
			style={[styles.container, containerStyles]}
		>
			<Text style={[styles.text, textStyles]}>
				{title}
			</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		borderRadius: 10,
		minHeight: 62,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontWeight: '600',
		fontSize: 18,
	},
})
