import React from "react"
import { shallow, mount } from "enzyme"
// import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import WeatherDetails from "./WeatherDetails"


describe("WeatherDetails.tsx", () => {
    const info = {
      tempMax: '32C',
      tempMin: '22C',
      feelsLike: '30C',
      humidity: '50%',
      pressure: '1022 mb'
    }

    beforeEach(() => {})

    it("Renders the WeatherDetails", () => {
        const SUT = shallow(<WeatherDetails info={info} />)

        expect(SUT.find(".weather-details").length).toEqual(1)
        expect(SUT.find("HighLight").length).toEqual(5)

        expect(SUT.find(".weather-details p").at(0).html()).toContain("Feels like")
        expect(SUT.find(".weather-details p").at(0).html()).toContain("30C")

        expect(SUT.find(".weather-details p").at(1).html()).toContain("Hi")
        expect(SUT.find(".weather-details p").at(1).html()).toContain("32C")

        expect(SUT.find(".weather-details p").at(2).html()).toContain("Lo")
        expect(SUT.find(".weather-details p").at(2).html()).toContain("22C")

        expect(SUT.find(".weather-details p").at(3).html()).toContain("Humidity")
        expect(SUT.find(".weather-details p").at(3).html()).toContain("50%")

        //... and so on
    })
})
