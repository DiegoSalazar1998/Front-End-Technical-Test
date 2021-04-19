  interface IWeather {
    id: string
    data: Object
  }
  
  type WeatherState = {
    weathers: IWeather[]
  }
  
  type WeatherAction = {
    type: string
    weather: IWeather
  }

  type actionsWeather = {
    actionType: string,
    sign: function,
    action: {
        getWeather:function
    }
};
  
  type DispatchType = (args: WeatherAction) => WeatherAction;