import React, { memo, useEffect } from "react";
import {
    ZoomableGroup,
    ComposableMap,
    Geographies,
    Geography
} from "react-simple-maps";
import { Api } from "../../api";

const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapChart = ({ setTooltipContent }: any) => {
    return (
        <>
            <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
                <ZoomableGroup>
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map(geo => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}

                                    onMouseEnter={async () => {
                                        const { NAME } = geo.properties;
                                        let json = await Api.getMapDapa();
                                        let result;

                                        for (let i in json) {
                                            if (
                                                NAME === 'United States of America' && json[i]['country'] === 'USA' ||
                                                NAME === 'United Kingdom' && json[i]['country'] === 'UK' ||
                                                NAME === 'Dominican Rep.' && json[i]['country'] === 'Dominican Republic' ||
                                                NAME === 'Falkland Is.' && json[i]['country'] === 'Falkland Islands (Malvinas)' ||
                                                NAME === 'Eq. Guinea' && json[i]['country'] === 'Equatorial Guinea' ||
                                                NAME === 'Central African Rep.' && json[i]['country'] === 'Central African Republic' ||
                                                NAME === 'S. Sudan' && json[i]['country'] === 'South Sudan' ||
                                                NAME === 'Libya' && json[i]['country'] === 'Libyan Arab Jamahiriya' ||
                                                NAME === 'W. Sahara' && json[i]['country'] === 'Western Sahara' ||
                                                NAME === 'Syria' && json[i]['country'] === 'Syrian Arab Republic' ||
                                                NAME === 'Bosnia and Herz.' && json[i]['country'] === 'Bosnia' ||
                                                NAME === 'Laos' && json[i]['country'] === 'Lao People\'s Democratic Republic' ||
                                                NAME === 'South Korea' && json[i]['country'] === 'S. Korea'
                                            ) {
                                                result = `
                                                    Casos: ${json[i]['cases'].toLocaleString('pt-BR')} </br>
                                                    Mortes: ${json[i]['deaths'].toLocaleString('pt-BR')} </br>
                                                    Recuperados: ${json[i]['recovered'].toLocaleString('pt-BR')}
                                                `;
                                            } else if (
                                                NAME === 'Puerto Rico' ||
                                                NAME === 'Dem. Rep. Congo' ||
                                                NAME === 'Somaliland' ||
                                                NAME === 'United Arab Emirates' ||
                                                NAME === 'Kosovo' ||
                                                NAME === 'Turkmenistan' ||
                                                NAME === 'North Korea' ||
                                                NAME === 'Antarctica' ||
                                                NAME === 'Fr. S. Antarctic Lands'
                                            ) {
                                                result = `
                                                    Dados indisponíveis para essa país
                                                `;
                                            } else if (json[i]['country'] === NAME) {
                                                result = `
                                                    Casos: ${json[i]['cases'].toLocaleString('pt-BR')} </br>
                                                    Mortes: ${json[i]['deaths'].toLocaleString('pt-BR')} </br>
                                                    Recuperados: ${json[i]['recovered'].toLocaleString('pt-BR')}
                                                `;
                                            }
                                        }

                                        setTooltipContent(`${NAME} <br/><br/> ${result}`)
                                    }}

                                    onMouseLeave={() => {
                                        setTooltipContent("");
                                    }}

                                    onPointerDownCapture={async () => {
                                        const { NAME } = geo.properties;
                                        let json = await Api.getMapDapa();
                                        let result;

                                        for (let i in json) {
                                            if (
                                                NAME === 'United States of America' && json[i]['country'] === 'USA' ||
                                                NAME === 'United Kingdom' && json[i]['country'] === 'UK' ||
                                                NAME === 'Dominican Rep.' && json[i]['country'] === 'Dominican Republic' ||
                                                NAME === 'Falkland Is.' && json[i]['country'] === 'Falkland Islands (Malvinas)' ||
                                                NAME === 'Eq. Guinea' && json[i]['country'] === 'Equatorial Guinea' ||
                                                NAME === 'Central African Rep.' && json[i]['country'] === 'Central African Republic' ||
                                                NAME === 'S. Sudan' && json[i]['country'] === 'South Sudan' ||
                                                NAME === 'Libya' && json[i]['country'] === 'Libyan Arab Jamahiriya' ||
                                                NAME === 'W. Sahara' && json[i]['country'] === 'Western Sahara' ||
                                                NAME === 'Syria' && json[i]['country'] === 'Syrian Arab Republic' ||
                                                NAME === 'Bosnia and Herz.' && json[i]['country'] === 'Bosnia' ||
                                                NAME === 'Laos' && json[i]['country'] === 'Lao People\'s Democratic Republic' ||
                                                NAME === 'South Korea' && json[i]['country'] === 'S. Korea'
                                            ) {
                                                result = `
                                                    Casos: ${json[i]['cases'].toLocaleString('pt-BR')} \n
                                                    Mortes: ${json[i]['deaths'].toLocaleString('pt-BR')} \n
                                                    Recuperados: ${json[i]['recovered'].toLocaleString('pt-BR')}
                                                `;
                                            } else if (
                                                NAME === 'Puerto Rico' ||
                                                NAME === 'Dem. Rep. Congo' ||
                                                NAME === 'Somaliland' ||
                                                NAME === 'United Arab Emirates' ||
                                                NAME === 'Kosovo' ||
                                                NAME === 'Turkmenistan' ||
                                                NAME === 'North Korea' ||
                                                NAME === 'Antarctica' ||
                                                NAME === 'Fr. S. Antarctic Lands'
                                            ) {
                                                result = `
                                                    Dados indisponíveis para essa país
                                                `;
                                            } else if (json[i]['country'] === NAME) {
                                                result = `
                                                    Casos: ${json[i]['cases'].toLocaleString('pt-BR')} -
                                                    Mortes: ${json[i]['deaths'].toLocaleString('pt-BR')} -
                                                    Recuperados: ${json[i]['recovered'].toLocaleString('pt-BR')}
                                                `;
                                            }
                                        }

                                        setTooltipContent(`${NAME} - ${result}`)

                                        setTimeout(() => {
                                            setTooltipContent("");
                                        }, 2000)
                                    }}

                                    style={{
                                        default: {
                                            fill: '#DCDCDC',
                                            outline: "none",
                                            stroke: '#999'
                                        },
                                        hover: {
                                            fill: "#F53",
                                            outline: "none"
                                        },
                                        pressed: {
                                            fill: "#E42",
                                            outline: "none"
                                        }
                                    }} />
                            ))}
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>
        </>
    );
};

export default memo(MapChart);
