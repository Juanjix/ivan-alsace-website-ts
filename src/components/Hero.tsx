"use client"

import { TypeHeroFields } from "@/types/contentful-types"
import { AssetLink } from "contentful"
import React from "react"

// Styles
import styled from "styled-components"

interface HeroProps {
  titulos: string[]
  imagen: AssetLink
}

const StyledHero = styled.section``

const Hero: React.FC<HeroProps> = (props) => {
  const { titulos, imagen } = props

  return (
    <StyledHero>
      <h1>{titulos.map((titulo) => titulo)}</h1>
    </StyledHero>
  )
}

export default Hero
