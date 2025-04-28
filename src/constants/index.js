export const DEFAULT_PLACE = {
    name: "Bengaluru",
    place_id: "bengaluru",
    adm_area1: "Karnataka",
    adm_area2: "Bengaluru Urban",
    country: "India",
    lat: "12.97194N",
    lon: "77.59369E",
    timezone: "Asia/Kolkata",
    type: "settlement",
};

export const MEASUREMENT_SYSTEMS = {
    AUTO: 'auto',
    METRIC: 'metric',
    UK: 'uk',
    US: 'us',
    CA: 'ca',
  };
  export const UNITS = {
    metric: {
      temperature: '°C',
      precipitation: 'mm/h',
      wind_speed: 'm/s',
      visibility: 'km',
      humidity: '%',
      uv_index: '',
      cloud_cover: '%',
    },
    us: {
      temperature: '°F',
      precipitation: 'in/h',
      wind_speed: 'mph',
      visibility: 'mi',
      humidity: '%',
      uv_index: '',
      cloud_cover: '%',
    },
    uk: {
      temperature: '°C',
      precipitation: 'mm/h',
      wind_speed: 'mph',
      visibility: 'mi',
      humidity: '%',
      uv_index: '',
      cloud_cover: '%',
    },
    ca: {
      temperature: '°C',
      precipitation: 'mm/h',
      wind_speed: 'km/h',
      visibility: 'km',
      humidity: '%',
      uv_index: '',
      cloud_cover: '%',
    },
  };