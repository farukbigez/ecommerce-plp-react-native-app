
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Content from './Content'

export function AppGradient({ children, colors }: { children: React.ReactNode, colors: [string, string, ...string[]] }) {
	return (
		<LinearGradient colors={colors} style={{ flex: 1 }}>
			<Content>{children}</Content>
		</LinearGradient>
	)
}
