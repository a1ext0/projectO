import weather from '../weather';

class Checkweather {
  now(): Promise<any> {
    return new Promise((resolve, reject) => {
      weather.getAllWeather(function (err: any, data: any) {
        if (err) reject(err);
        else resolve(data);
      });
    });
  }
}

let checkweather = new Checkweather();

class Question {
  async open(): Promise<true | false> {
    try {
      let weather = await checkweather.now();
      if (
        checker.countMain(weather.weather[0].description) >= 0.7 &&
        weather.main.feels_like >= 17
      ) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

let question = new Question();

class Checker {
  countMain(description: string): number {
    let i: number;
    switch (description) {
      case 'clear sky':
        i = 1;
        break;
      case 'few clouds':
        i = 0.9;
        break;
      case 'scattered clouds':
        i = 0.8;
        break;
      case 'broken clouds':
        i = 0.7;
        break;
      case 'overcast clouds':
        i = 0.6;
        break;
      case 'light rain':
        i = 0.9;
        break;
      case 'moderate rain':
        i = 0.8;
        break;
      case 'heavy intensity rain':
        i = 0.7;
        break;
      case 'very heavy rain':
        i = 0.6;
        break;
      case 'extreme rain':
        i = 0.5;
        break;
      case 'light intensity shower rain':
        i = 0.4;
        break;
      case 'shower rain':
        i = 0.3;
        break;
      case 'heavy intensity shower rain':
        i = 0.2;
        break;
      case 'ragged shower rain':
        i = 0.1;
        break;

      default:
        i = 0.1;
        break;
    }
    return i;
  }
}

let checker = new Checker();

(async () => {
  // let i = await new Question().open();
  let i = await question.open();
  console.log(i);
  // console.log(i);
})();
