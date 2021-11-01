import LifeButton from '@/components/LifeButton'
import LifeNavbar from '@/components/LifeNavbar'
import React, {useEffect, useState} from 'react'
import styles from "@/styles/Results.module.css"
import { useRouter } from 'next/router'
import LifeProgressBar from '@/components/LifeProgressBar'
import axios from 'axios'

function Results(props) {
    const router = useRouter();
    const [age, setAge] = useState("")
    const [sex, setSex] = useState("")

    useEffect(() => {
        const storage = window.localStorage
        if(!storage.getItem("sex") || !storage.getItem("age")) {
            router.push("/")
        }
        setAge(storage.getItem("age"))
        setSex(storage.getItem("sex"))
    })

    function getTitle(age, sex, country, data) {
        if (calculatePercentageLived(age, generateLifeExpectancy(sex, country, data)) <= 100) {
            return `Congrats, you have lived ${calculatePercentageLived(age, generateLifeExpectancy(sex, country, data))}% of your life!`
        }
        return `Congrats, you have lived ${calculatePercentageLived(age, generateLifeExpectancy(sex, country, data)) - 100}% past the life expectation in your country!`
    }

    function generateLifeExpectancy(sex, country, country_data) {
        return parseFloat(Math.floor(country_data[country][sex]))
    }
    function calculatePercentageLived(age, life_expectancy) {
        return Math.floor((age / life_expectancy) * 100)
    }
    function convertYearMonth(years) {
        return years * 12
    }
    function convertYearWeek(years) {
        return Math.floor((years * 365) / 7)
    }
    function convertYearDay(years) {
        return years * 365
    }
    function convertYearHour(years) {
        return years * 365 * 24
    }
    function convertYearMinute(years) {
        return years * 365 * 24 * 60
    }
    function convertYearSecond(years) {
        return years * 365 * 24 * 60 * 60
    }
    function formatNumbers(number) {
        return number.toLocaleString()
    }
    return (
        <div className={styles.container}>
            <LifeNavbar variant="quiz"></LifeNavbar>
            <h1 className={styles.title}>{getTitle(age, sex, props.geo_data.country, props.life_data)}</h1>
            <h2 className={styles.subTitle}>This information was estimated using data from <a href="https://worldometers.info">worldometers.info</a></h2>
            <LifeProgressBar percentage={calculatePercentageLived(age, generateLifeExpectancy(sex, props.geo_data.country, props.life_data))} margin={"0 0 40px 0"}></LifeProgressBar>
            <h3 className={styles.statisticEntry}>You have lived for <span className={styles.highlighted}>{formatNumbers(age)} years.</span></h3>
            <h3 className={styles.statisticEntry}>You have been alive for <span className={styles.highlighted}>{formatNumbers(convertYearMonth(age))} months.</span></h3>
            <h3 className={styles.statisticEntry}>You have lived for <span className={styles.highlighted}>{formatNumbers(convertYearWeek(age))} weeks.</span></h3>
            <h3 className={styles.statisticEntry}>You have been alive for <span className={styles.highlighted}>{formatNumbers(convertYearDay(age))} days.</span></h3>
            <h3 className={styles.statisticEntry}><span className={styles.highlighted}>{formatNumbers(convertYearHour(age))} hours</span> have passed by since you were born.</h3>
            <h3 className={styles.statisticEntry}>You have Lived for <span className={styles.highlighted}>{formatNumbers(convertYearMinute(age))} minutes.</span></h3>
            <h3 className={styles.statisticEntry}>You have been alive for <span className={styles.highlighted}>{formatNumbers(convertYearSecond(age))} Seconds.</span></h3>
        </div>
    )
}

Results.getInitialProps = async function (ctx) {
    const geo_location_data = (await axios.get("https://ipgeolocation.abstractapi.com/v1/?api_key=ece189d7fd6d4509aaecb606ef8e7a1c")).data

    return {
        geo_data: geo_location_data,
        life_data: {"country": {"both": "both", "male": "male", "female": "female"}, "Afghanistan": {"both": "65.98", "male": "64.47", "female": "67.59"}, "Albania": {"both": "78.96", "male": "77.48", "female": "80.48"}, "Algeria": {"both": "77.50", "male": "76.30", "female": "78.76"}, "Angola": {"both": "62.22", "male": "59.46", "female": "65.12"}, "Antigua and Barbuda": {"both": "77.47", "male": "76.26", "female": "78.58"}, "Argentina": {"both": "77.17", "male": "73.82", "female": "80.42"}, "Armenia": {"both": "75.55", "male": "71.82", "female": "78.90"}, "Aruba": {"both": "76.79", "male": "74.26", "female": "79.10"}, "Australia": {"both": "83.94", "male": "82.08", "female": "85.80"}, "Austria": {"both": "82.05", "male": 
        "79.88", "female": "84.19"}, "Azerbaijan": {"both": "73.33", "male": "70.76", "female": "75.87"}, "Bahamas": {"both": "74.28", "male": "71.95", "female": "76.51"}, "Bahrain": {"both": "77.73", "male": "76.87", "female": "78.88"}, "Bangladesh": {"both": "73.57", "male": "71.80", "female": "75.60"}, "Barbados": {"both": "79.64", "male": "78.36", "female": "80.85"}, "Belarus": {"both": "75.20", "male": "70.15", "female": "79.90"}, "Belgium": {"both": "82.17", "male": "80.00", "female": "84.31"}, "Belize": {"both": "75.09", "male": "72.14", "female": "78.25"}, "Benin": {"both": "62.84", "male": "61.23", "female": "64.45"}, "Bhutan": {"both": "72.77", "male": "72.27", "female": "73.33"}, "Bolivia": {"both": "72.35", "male": "69.50", "female": "75.35"}, "Bosnia and Herzegovina": {"both": "77.93", "male": "75.48", "female": "80.32"}, "Botswana": {"both": "69.86", "male": "66.72", "female": "72.69"}, "Brazil": {"both": "76.57", "male": "73.01", "female": "80.14"}, "Brunei ": {"both": "76.35", "male": "75.17", "female": "77.64"}, "Bulgaria": {"both": "75.49", "male": "72.05", "female": "79.06"}, "Burkina Faso": {"both": "62.98", "male": "62.06", "female": "63.78"}, "Burundi": {"both": "62.71", "male": "60.85", "female": "64.56"}, "Cabo Verde": {"both": "73.58", "male": "70.15", "female": "76.83"}, "Cambodia": {"both": "70.54", "male": "68.20", "female": "72.69"}, "Cameroon": {"both": "60.32", "male": "58.99", "female": "61.66"}, "Canada": {"both": "82.96", "male": "81.15", "female": "84.74"}, "Central African Republic": {"both": "54.36", "male": "52.16", "female": "56.58"}, "Chad": {"both": "55.17", "male": "53.73", "female": "56.65"}, "Channel Islands": {"both": "83.60", "male": "81.82", "female": "85.31"}, "Chile": {"both": "80.74", "male": "78.54", "female": "82.80"}, "China": {"both": "77.47", "male": "75.36", "female": "79.73"}, "Colombia": {"both": "77.87", "male": "75.18", 
        "female": "80.54"}, "Comoros": {"both": "65.03", "male": "63.24", "female": "66.88"}, "Congo": {"both": "65.21", "male": "63.67", "female": "66.73"}, "Costa Rica": {"both": "80.94", "male": "78.53", "female": "83.39"}, "Côte d'Ivoire": {"both": "58.75", "male": "57.50", "female": "60.13"}, "Croatia": {"both": "79.02", "male": "75.95", "female": "82.02"}, "Cuba": {"both": "79.18", "male": "77.25", "female": "81.12"}, "Curaçao": {"both": "79.41", "male": "76.42", "female": 
        "82.08"}, "Cyprus": {"both": "81.51", "male": "79.55", "female": "83.45"}, "Czech Republic (Czechia)": {"both": "79.85", "male": "77.33", "female": "82.35"}, "Denmark": {"both": "81.40", "male": "79.54", "female": "83.27"}, "Djibouti": {"both": "67.87", "male": "65.84", "female": "70.16"}, "Dominican Republic": {"both": "74.65", "male": "71.58", "female": "77.90"}, "DR Congo": {"both": "61.60", "male": "60.01", "female": "63.21"}, "Ecuador": {"both": "77.71", "male": "75.05", "female": "80.45"}, "Egypt": {"both": "72.54", "male": "70.23", "female": "74.95"}, "El Salvador": {"both": "74.06", "male": "69.27", "female": "78.48"}, "Equatorial Guinea": {"both": "59.82", "male": "58.76", "female": "61.08"}, "Eritrea": {"both": "67.48", "male": "65.26", "female": "69.75"}, "Estonia": {"both": "79.18", "male": "74.98", "female": "83.06"}, "Eswatini": {"both": "61.05", "male": "56.98", "female": "65.67"}, "Ethiopia": {"both": "67.81", "male": "65.86", "female": "69.80"}, "Fiji": {"both": "67.91", "male": "66.00", "female": "69.97"}, "Finland": {"both": "82.48", "male": "79.82", "female": "85.14"}, "France": {"both": "83.13", "male": "80.32", "female": "85.82"}, "French Guiana": {"both": "80.53", "male": "77.80", "female": "83.38"}, "French Polynesia": {"both": "78.23", "male": "76.23", "female": "80.41"}, "Gabon": {"both": "67.03", "male": "64.93", "female": "69.27"}, "Gambia": {"both": "63.26", "male": "61.80", "female": "64.73"}, "Georgia": {"both": "74.24", "male": "69.85", "female": "78.54"}, "Germany": {"both": "81.88", "male": "79.62", "female": "84.14"}, "Ghana": {"both": "64.94", "male": "63.78", "female": "66.13"}, "Greece": {"both": "82.80", "male": "80.52", "female": "85.08"}, "Grenada": {"both": "72.59", "male": "70.24", "female": "75.16"}, "Guadeloupe": {"both": "82.74", "male": "79.16", "female": "85.94"}, "Guam": {"both": "80.74", "male": "77.63", "female": "83.98"}, "Guatemala": {"both": "75.05", "male": "72.14", "female": "77.89"}, "Guinea": {"both": "62.64", "male": "61.79", "female": "63.25"}, "Guinea-Bissau": {"both": "59.38", "male": "57.31", "female": "61.33"}, "Guyana": {"both": "70.26", "male": "67.22", "female": "73.53"}, "Haiti": {"both": "64.99", "male": "62.77", "female": "67.21"}, "Honduras": {"both": "75.87", "male": "73.57", "female": "78.14"}, "Hong Kong": {"both": "85.29", "male": "82.38", "female": "88.17"}, "Hungary": {"both": "77.31", "male": "73.78", "female": "80.66"}, "Iceland": {"both": "83.52", "male": "82.15", "female": "84.90"}, "India": {"both": "70.42", "male": "69.16", "female": "71.80"}, "Indonesia": {"both": "72.32", "male": "70.12", "female": "74.64"}, "Iran": {"both": "77.33", "male": "76.22", "female": "78.54"}, "Iraq": {"both": "71.08", "male": "68.96", "female": "73.21"}, "Ireland": {"both": "82.81", "male": "81.29", "female": "84.32"}, "Israel": {"both": "83.49", "male": "81.98", "female": "84.91"}, "Italy": {"both": "84.01", "male": "81.90", "female": "85.97"}, "Jamaica": {"both": "74.88", "male": "73.17", "female": "76.60"}, "Japan": {"both": "85.03", "male": "81.91", "female": "88.09"}, "Jordan": {"both": "75.01", "male": "73.28", "female": "76.82"}, "Kazakhstan": {"both": "73.90", "male": "69.55", "female": "77.97"}, "Kenya": {"both": "67.47", "male": "65.04", "female": "69.87"}, "Kiribati": {"both": "69.17", "male": "65.00", "female": "73.12"}, "Kuwait": {"both": "75.85", "male": "75.09", "female": "77.06"}, "Kyrgyzstan": {"both": "71.95", "male": "67.85", "female": "76.03"}, "Laos": {"both": "68.89", "male": "67.04", "female": "70.79"}, "Latvia": {"both": "75.73", "male": "70.81", "female": "80.37"}, "Lebanon": {"both": "79.27", "male": "77.53", "female": "81.17"}, "Lesotho": {"both": "55.65", "male": "52.52", "female": "58.90"}, "Liberia": {"both": "65.00", "male": "63.54", "female": "66.48"}, "Libya": {"both": "73.44", "male": "70.61", "female": "76.46"}, "Lithuania": {"both": "76.41", "male": "70.97", "female": "81.70"}, "Luxembourg": {"both": "82.79", "male": "80.83", "female": "84.76"}, "Macao": {"both": "84.68", "male": "81.73", "female": "87.62"}, "Madagascar": {"both": "68.21", "male": "66.53", "female": "69.92"}, "Malawi": {"both": "65.62", "male": "62.45", "female": "68.77"}, "Malaysia": {"both": "76.65", "male": "74.71", "female": "78.78"}, "Maldives": {"both": "79.89", "male": "78.53", "female": "81.58"}, "Mali": {"both": "60.54", "male": "59.69", "female": "61.39"}, "Malta": {"both": "83.06", "male": "81.37", "female": "84.68"}, "Martinique": {"both": "83.13", "male": "79.85", "female": "86.10"}, "Mauritania": {"both": "65.57", "male": "63.88", "female": "67.24"}, "Mauritius": {"both": "75.51", "male": "72.21", "female": "78.92"}, "Mayotte": {"both": "79.85", "male": "76.62", "female": "83.24"}, "Mexico": {"both": "75.41", "male": "72.62", "female": "78.17"}, "Micronesia": {"both": "68.27", "male": "66.54", "female": "70.07"}, "Moldova": {"both": "72.30", "male": "68.02", "female": "76.53"}, "Mongolia": {"both": "70.53", "male": "66.43", "female": "74.79"}, "Montenegro": {"both": "77.39", "male": "74.99", "female": "79.77"}, "Morocco": {"both": "77.43", "male": "76.17", "female": "78.66"}, "Mozambique": {"both": "62.13", "male": "59.05", "female": "64.95"}, "Myanmar": {"both": "67.78", "male": "64.65", "female": "70.81"}, "Namibia": {"both": "64.86", "male": "61.83", "female": "67.67"}, "Nepal": {"both": "71.74", "male": "70.13", "female": "73.23"}, "Netherlands": {"both": "82.78", "male": "81.20", "female": 
        "84.35"}, "New Caledonia": {"both": "78.16", "male": "75.61", "female": "80.89"}, "New Zealand": {"both": "82.80", "male": "81.20", "female": "84.38"}, "Nicaragua": {"both": "75.23", "male": "71.75", "female": "78.65"}, "Niger": {"both": 
        "63.62", "male": "62.41", "female": "64.89"}, "Nigeria": {"both": "55.75", "male": "54.80", "female": "56.75"}, "North Korea": {"both": "72.89", "male": "69.26", "female": "76.37"}, "North Macedonia": {"both": "76.26", "male": "74.26", "female": "78.32"}, "Norway": {"both": "82.94", "male": "81.11", "female": "84.78"}, "Oman": {"both": "78.58", "male": "76.90", "female": "80.94"}, "Pakistan": {"both": "67.79", "male": "66.77", "female": "68.90"}, "Panama": {"both": "79.10", "male": "76.14", "female": "82.20"}, "Papua New Guinea": {"both": "65.22", "male": "63.92", "female": "66.62"}, "Paraguay": {"both": "74.59", "male": "72.55", "female": "76.78"}, "Peru": {"both": "77.44", "male": "74.87", "female": "80.15"}, "Philippines": {"both": "71.66", "male": "67.67", "female": "75.92"}, "Poland": {"both": "79.27", "male": "75.51", "female": "82.98"}, "Portugal": {"both": "82.65", "male": "79.79", "female": "85.28"}, "Puerto Rico": {"both": "80.69", "male": "77.27", "female": "83.92"}, "Qatar": {"both": "80.73", "male": "79.78", "female": "82.49"}, "Réunion": {"both": "81.55", "male": "78.52", "female": "84.45"}, "Romania": {"both": "76.50", "male": "73.13", "female": "79.91"}, "Russia": {"both": "72.99", "male": "67.62", "female": "78.15"}, "Rwanda": {"both": "70.00", "male": "67.75", "female": "72.16"}, "Saint Lucia": {"both": "76.67", "male": "75.27", "female": "78.06"}, "Samoa": {"both": "73.75", "male": "71.69", "female": "75.97"}, "Sao Tome & Principe": {"both": "71.01", "male": "68.54", "female": "73.50"}, "Saudi Arabia": {"both": "75.69", "male": "74.47", "female": "77.37"}, "Senegal": {"both": "68.87", "male": "66.64", "female": "70.88"}, "Serbia": {"both": "76.47", "male": "73.89", "female": "79.05"}, "Seychelles": {"both": "73.74", "male": "70.26", "female": "77.71"}, "Sierra Leone": {"both": "55.92", "male": "55.01", "female": "56.78"}, "Singapore": {"both": "84.07", 
        "male": "82.06", "female": "86.15"}, "Slovakia": {"both": "78.00", "male": "74.59", "female": "81.35"}, "Slovenia": {"both": "81.85", "male": "79.26", "female": "84.44"}, "Solomon Islands": {"both": "73.38", "male": "71.60", "female": "75.31"}, "Somalia": {"both": "58.34", "male": "56.62", "female": "60.11"}, "South Africa": {"both": "64.88", "male": "61.46", "female": "68.42"}, "South Korea": {"both": "83.50", "male": "80.46", "female": "86.42"}, "South Sudan": {"both": 
        "58.74", "male": "57.21", "female": "60.31"}, "Spain": {"both": "83.99", "male": "81.27", "female": "86.68"}, "Sri Lanka": {"both": "77.56", "male": "74.25", "female": "80.74"}, "St. Vincent & Grenadines": {"both": "72.98", "male": "70.66", "female": "75.62"}, "State of Palestine": {"both": "74.62", "male": "72.92", "female": "76.38"}, "Sudan": {"both": "66.09", "male": "64.18", "female": "68.03"}, "Suriname": {"both": "72.13", "male": "68.88", "female": "75.55"}, "Sweden": {"both": "83.33", "male": "81.69", "female": "84.97"}, "Switzerland": {"both": "84.25", "male": "82.42", "female": "86.02"}, "Syria": {"both": "76.06", "male": "73.13", "female": "79.11"}, "Taiwan": {"both": "81.04", "male": "78.49", "female": "83.64"}, "Tajikistan": {"both": "71.76", "male": "69.50", "female": "74.11"}, "Tanzania": {"both": "66.39", "male": "64.52", "female": "68.25"}, "Thailand": {"both": "77.74", "male": "74.16", "female": "81.34"}, "Timor-Leste": {"both": "70.18", "male": "68.14", "female": "72.36"}, "Togo": {"both": "62.13", "male": "61.16", "female": "63.08"}, "Tonga": {"both": "71.32", "male": "69.28", "female": "73.38"}, "Trinidad and Tobago": {"both": "73.91", "male": "71.24", "female": "76.66"}, "Tunisia": {"both": "77.36", "male": "75.37", "female": "79.34"}, "Turkey": {"both": "78.45", "male": "75.57", "female": "81.21"}, "Turkmenistan": {"both": "68.63", "male": "65.10", "female": "72.19"}, "U.S. Virgin Islands": {"both": "81.17", "male": "78.64", "female": "83.52"}, "Uganda": {"both": "64.38", "male": "61.99", "female": "66.67"}, "Ukraine": {"both": "72.50", "male": "67.56", "female": "77.27"}, "United Arab Emirates": {"both": "78.46", "male": "77.79", "female": "79.80"}, "United Kingdom": {"both": "81.77", "male": "80.22", "female": "83.28"}, "United States": {"both": "79.11", "male": "76.61", "female": "81.65"}, "Uruguay": {"both": "78.43", "male": "74.75", "female": "81.88"}, "Uzbekistan": {"both": "72.04", "male": "69.80", "female": "74.26"}, "Vanuatu": {"both": "70.99", "male": "69.40", "female": "72.75"}, "Venezuela": {"both": "72.34", "male": "68.59", "female": "76.25"}, "Vietnam": {"both": "75.77", "male": "71.73", "female": "79.85"}, "Western Sahara": {"both": "71.08", "male": "69.36", "female": "73.19"}, "Yemen": {"both": "66.44", "male": "64.72", "female": "68.16"}, "Zambia": {"both": "64.70", "male": "61.66", "female": "67.71"}, "Zimbabwe": {"both": "62.16", "male": "60.39", "female": "63.66"}},
    }
}

export default Results
