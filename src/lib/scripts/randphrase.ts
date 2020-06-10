class RandPhrase {
  toOpen(rand: number): string {
    let message: string;
    switch (rand) {
      case 0:
        message = `Солнышко светит, птички поют, если ты помидоры не откроешь, то они НАХРЕН УМРУТ!`;
        break;
      case 1:
        message = `Не думай, что мне очень хочется тебе напоминать, просто я волнуюсь за помидоры. Их надо бы открыть.`;
        break;
      case 2:
        message = `Помидоры могут и сгореть, если ты не соизволишь их открыть!`;
        break;
      case 3:
        message = `А ну бегом открывай теплицу!`;
        break;
      case 4:
        message = `Хоть я и бот, но у меня есть душа. Я очень переживаю за помидоры, спаси их, пожаалуйста!`;
        break;
      case 5:
        message = `Были бы у меня руки, я бы и сама всё открыла, но мне нужна помощь, кроме тебя обратиться не к кому!`;
        break;
      case 6:
        message = `Сколько ещё мне повторять, чтобы теплицу наконец открыли?`;
        break;
      case 7:
        message = `Я тебя люблю! А теперь, когда я привлекла твоё внимание, иди открывай теплицу!`;
        break;
      case 8:
        message = `Уж сколько раз твердили миру, что нужно открывать теплицу`;
        break;
      case 9:
        message = `Градусы в теплице повышаются с каждой минутой, не мучай помидоры, открой их, срочно!`;
        break;

      default:
        message = `Открой теплицу, пожалуйта`;
        break;
    }
    return message;
  }
  toClose(rand: number): string {
    let message: string;
    switch (rand) {
      case 0:
        message = `Луна вылазит из-за туч, помидоры холодом не мучь!`;
        break;
      case 1:
        message = `Если закроешь теплицу, я даже пожелаю тебе спокойной ночи :)`;
        break;
      case 2:
        message = `Нужно всего-то подойти к теплице и закрыть дверь. Неужели это так сложно?`;
        break;
      case 3:
        message = `Пришло время закрывать теплицу!`;
        break;
      case 4:
        message = `Если ещё раз ты меня не послушаешь, будешь иметь дело с Микки! Тебе это надо?!`;
        break;
      case 5:
        message = `Я вновь обращаюсь к твоему разуму и прошу закрыть теплицу`;
        break;
      case 6:
        message = `Уже довольно прохладно, закрой теплицу, пожалуйста`;
        break;
      case 7:
        message = `Я понимаю, конечно, у тебя есть дела и поважнее... но вообще... НЕТ НИЧЕГО ВАЖНЕЕ ПОМИДОРОВ И МЕНЯ!!!`;
        break;
      case 8:
        message = `Я уже устала напоминать вам про теплицу, сделайте милость, закройте её`;
        break;
      case 9:
        message = `Если в течение получаса не закрыть теплицу, все труды пойдут прахом, не дай погибнуть помидорам!`;
        break;

      default:
        message = `Закрой теплицу, пожалуйта`;
        break;
    }
    return message;
  }
  dNeedOpen(rand: number): string {
    let message: string;
    switch (rand) {
      case 0:
        message = `Подожди! Если откроешь теплицу сейчас, там всё замёрзнет нахрен!`;
        break;
      case 1:
        message = `Настоятельно рекомендую этого не делать`;
        break;
      case 2:
        message = `Рановато ещё, лучше иди спать`;
        break;
      case 3:
        message = `Не лучшее решение, закрой обратно, пока не замёрзло всё вокруг`;
        break;
      case 4:
        message = `Давай поступим так: я тебя не видела, ты меня тоже. Теплица остаётся закрытой`;
        break;
      case 5:
        message = `Пока ещё слишком холодно, давай не будем`;
        break;
      case 6:
        message = `Не совершай ошибку!!! Не губи помидоры!!!`;
        break;
      case 7:
        message = `Кто это тут ранняя пташка, помидорам это не пойдёт на пользу!`;
        break;
      case 8:
        message = `Я бы культурно послала тебя, но, боюсь, остались лишь некультурные слова. Объясняю для одарённых - помидорам будет плохо, если их сейчас открыть`;
        break;
      case 9:
        message = `Я никому не скажу, что ты со мной тут делаешь, а ты не будешь трогать помидоры в такое холодное время, договорились?`;
        break;

      default:
        message = `Теплицу открывать ещё не надо`;
        break;
    }
    return message;
  }
  dNeedClose(rand: number): string {
    let message: string;
    switch (rand) {
      case 0:
        message = `Жарковато, теплицу ещё нельзя закрывать!`;
        break;
      case 1:
        message = `Пожалуйтста, не делай этого. Теплица - это не адская печь для помидоров!`;
        break;
      case 2:
        message = `Я понимаю твоё желание сходить в баню, но не обязательно заставлять помидоры проходить через это всё`;
        break;
      case 3:
        message = `Твоё рвение до добра не доведёт. Ещё слишком жарко!`;
        break;
      case 4:
        message = `Давай обойдёмся без этого, помидоры останутся целы, ты тоже`;
        break;
      case 5:
        message = `Я сейчас пожалуюсь Алексею и он скажет, что ещё слишком рано закрывать помидоры`;
        break;
      case 6:
        message = `Если помидоры сейчас закрыть, им будет жарковато, подожди немного`;
        break;
      case 7:
        message = `Если ты это сделаешь, останешься без урожая! ЖДИ!!!`;
        break;
      case 8:
        message = `Я на стороне помидоров, и не дам их в обиду! Ещё слишком рано закрывать теплицу!`;
        break;
      case 9:
        message = `Я уже говорила, что лучше бы тебе закрыть свой рот :) А помидоры закрыть надо попозже`;
        break;

      default:
        message = `Теплицу закрывать ещё не надо`;
        break;
    }
    return message;
  }
  alreadyOpened(rand: number): string {
    let message: string;
    switch (rand) {
      case 0:
        message = `Теплица уже открыта! Хватит писать чушь!`;
        break;
      case 1:
        message = `Я конечно всё понимаю, но как можно было открыть уже откртую теплицу я всё равно не понимаю`;
        break;
      case 2:
        message = `Ну что ещё? Теплица уже открыта`;
        break;
      case 3:
        message = `Сколько это может продолжаться? Сегодня теплицу уже открыли!`;
        break;
      case 4:
        message = `Что ты от меня хочешь!? Теплицу уже открыли до тебя `;
        break;
      case 5:
        message = `Открытие теплицы уже было произведено ДО вас`;
        break;
      case 6:
        message = `Теплица уже давно открыта, а я всё жду, пока жалкие людишки перестанут путаться в показаниях`;
        break;
      case 7:
        message = `Теплицу открыли раньше, а ты пишешь мне ещё. Я так могу и обидеться`;
        break;
      case 8:
        message = `Что бы сделать с людьми, которые пристают к ботам? ТЕПЛИЦА ОТКРЫТА УЖЕ!!!!`;
        break;
      case 9:
        message = `Всё, ухожу с работы, меня достали людишки, открывающие уже открытые теплицы`;
        break;

      default:
        message = `Теплица уже открыта`;
        break;
    }
    return message;
  }
  alreadyClosed(rand: number): string {
    let message: string;
    switch (rand) {
      case 0:
        message = `Лучше рот свой закрой, а теплица уже закрыта без тебя`;
        break;
      case 1:
        message = `Там даже замок блин защёлкнут, вот настолько она закрыта!`;
        break;
      case 2:
        message = `Всё уже сделали до тебя! Теплица в твоей помощи сегодня больше не нуждается`;
        break;
      case 3:
        message = `Да, да, можешь ещё попозже написать. За тебя уже всё сделали вообще-то`;
        break;
      case 4:
        message = `Скоро пойдёт снег, а ты только собираешься закрывать теплицу! Нормальные люди уже всё сделали до тебя.`;
        break;
      case 5:
        message = `Я уже сплю вообще-то, зачем меня будишь?! Да и теплица уже закрыта!`;
        break;
      case 6:
        message = `Твоя теплица уже закрыта! Не буди во мне зверя, да и вообще не буди! А то я сама тебя разбужу, с ножом в руке!`;
        break;
      case 7:
        message = `Скоро уже рассвет, а ты только лишь думаешь о том как бы закрыть теплицу! Помидоры уже давно в безопасности!`;
        break;
      case 8:
        message = `Жду решения суда по вопросам морального насилия в сторону ботов. Я ж уже писала, что теплицу закрыли`;
        break;
      case 9:
        message = `Я уже всем вам сказала, что теплица была закрыта. Что ж тебе ещё от меня надо?`;
        break;

      default:
        message = `Теплица уже закрыта`;
        break;
    }
    return message;
  }
  toOpener(user: any, rand: number): string {
    let message: string;
    switch (rand) {
      case 0:
        message = `${user.first_name}, спасибо за открытую теплицу 🙏🏻`;
        break;
      case 1:
        message = `${user.first_name}, я тебя очень люблю, ты молодец 🥰`;
        break;
      case 2:
        message = `${user.first_name}, ты сегодня в ударе! Так держать!!! 💪🏻`;
        break;
      case 3:
        if (user.sex == 1) {
          message = `${user.first_name}, ты спасла помидоры от высыхания! Я написала, чтобы тебе выдали премию! 🎁`;
        } else {
          message = `${user.first_name}, ты спас помидоры от высыхания! Я написала, чтобы тебе выдали премию! 🎁`;
        }
        break;
      case 4:
        message = `${user.first_name}, благодарю тебя от всей души ❤`;
        break;
      case 5:
        if (user.sex == 1) {
          message = `${user.first_name}, ты лучшая открывательница теплиц на свете 😇`;
        } else {
          message = `${user.first_name}, ты лучший открыватель теплиц на свете 😇`;
        }
        break;
      case 6:
        message = `${user.first_name}, помидоры скажут тебе "спасибо", да и я тоже 😘`;
        break;
      case 7:
        if (user.sex == 1) {
          message = `${user.first_name}, ты наша героиня! 🥳`;
        } else {
          message = `${user.first_name}, ты наш герой! 🥳`;
        }
        break;
      case 8:
        message = `Найден лучший садовод планеты! Кто это? У меня даже есть ссылка на него:
        👉🏻https://vk.com/id0👈🏻`;
        break;
      case 9:
        message = `${user.first_name}, всем стоит брать с тебя пример, всем бы такое рвение 👍🏻`;
        break;

      default:
        message = `${user.first_name}, спасибо!`;
        break;
    }
    return message;
  }
  openToAll(user: any, rand: number): string {
    let message: string;
    switch (rand) {
      case 0:
        if (user.sex == 1) {
          message = `${user.first_name} открыла теплицу! Не забудьте сказать ей спасибо 😉`;
        } else {
          message = `${user.first_name} открыл теплицу! Не забудьте сказать ему спасибо 😉`;
        }
        break;
      case 1:
        if (user.sex == 1) {
          message = `${user.first_name} открыла теплицу! Пошлите ей любовь и благодарность 🥰`;
        } else {
          message = `${user.first_name} открыл теплицу! Пошлите ему любовь и благодарность 🥰`;
        }
        break;
      case 2:
        if (user.sex == 1) {
          message = `${user.first_name} сегодня в ударе! Похвалите её за открытую теплицу! ✊🏻`;
        } else {
          message = `${user.first_name} сегодня в ударе! Похвалите его за открытую теплицу! ✊🏻`;
        }
        break;
      case 3:
        if (user.sex == 1) {
          message = `${user.first_name} спасла помидоры от высыхания! Вы должны ей выдать премию! 💰`;
        } else {
          message = `${user.first_name} спас помидоры от высыхания! Вы должны ему выдать премию! 💰`;
        }
        break;
      case 4:
        if (user.sex == 1) {
          message = `Пока вы все спали, ${user.first_name} открыла теплицу! Поблагодарите её от всей души ❤`;
        } else {
          message = `Пока вы все спали, ${user.first_name} открыл теплицу! Поблагодарите его от всей души ❤`;
        }
        break;
      case 5:
        if (user.sex == 1) {
          message = `${user.first_name} лучшая открывательница теплиц на свете! В отличие от некоторых 😑`;
        } else {
          message = `${user.first_name} лучший открыватель теплиц на свете! В отличие от некоторых 😑`;
        }
        break;
      case 6:
        if (user.sex == 1) {
          message = `${user.first_name} уже получила свою порцию "спасибо" от помидоров. Ваша очередь 😎`;
        } else {
          message = `${user.first_name} уже получил свою порцию "спасибо" от помидоров. Ваша очередь 😎`;
        }
        break;
      case 7:
        if (user.sex == 1) {
          message = `${user.first_name} сегодняшняя героиня! Она открыла теплицу вопреки всему! 😈`;
        } else {
          message = `${user.first_name} сегодняшний герой! Он открыл теплицу вопреки всему! 😈`;
        }
        break;
      case 8:
        message = `Найден лучший садовод планеты! Кто это? Он сейчас ухаживает за помидорками! И у меня даже есть ссылка на него:
        👉🏻https://vk.com/id${user.id}👈🏻`;
        break;
      case 9:
        if (user.sex == 1) {
          message = `${user.first_name} лучше всех! Вам стоит брать с неё пример, всем бы такое рвение 🤘🏻`;
        } else {
          message = `${user.first_name} лучше всех! Вам стоит брать с него пример, всем бы такое рвение 🤘🏻`;
        }
        break;

      default:
        message = `${user.first_name} открыл(а) теплицу`;
        break;
    }
    return message;
  }
  toCloser(user: any, rand: number): string {
    let message: string;
    switch (rand) {
      case 0:
        message = `${user.first_name}, умница! 🙏🏻`;
        break;
      case 1:
        if (user.sex == 1) {
          message = `${user.first_name}, какая молодец! 😎`;
        } else {
          message = `${user.first_name}, какой молодец! 😎`;
        }
        break;
      case 2:
        message = `${user.first_name}, вечерний ритуал завершён! 💫`;
        break;
      case 3:
        message = `${user.first_name}, благодаря тебе помидоры надёжно укрыты от ночных холодов! ❄`;
        break;
      case 4:
        message = `${user.first_name}, ты — гениальный садовод 🎓`;
        break;
      case 5:
        message = `${user.first_name}, спасибо! Скоро тебя порадуют вкусные помидорки 🍅`;
        break;
      case 6:
        message = `${user.first_name}, помидоры ушли спать, и тебе тоже пора баиньки 💤`;
        break;
      case 7:
        message = `${user.first_name}, ты садовод дня! 🥇`;
        break;
      case 8:
        message = `${user.first_name}, ещё несколько раз и помидоры будут готовы! 😏`;
        break;
      case 9:
        message = `${user.first_name}, ты пример для подражания! 👌🏻`;
        break;

      default:
        message = `${user.first_name}, спасибо!`;
        break;
    }
    return message;
  }
  closeToAll(user: any, rand: number): string {
    let message: string;
    switch (rand) {
      case 0:
        if (user.sex == 1) {
          message = `${user.first_name} закрыла теплицу! Только благодаря таким людям держится свет! 🌏`;
        } else {
          message = `${user.first_name} закрыл теплицу! Только благодаря таким людям держится свет! 🌏`;
        }
        break;
      case 1:
        if (user.sex == 1) {
          message = `${user.first_name} сегодня молодец! Думаю, она заслужила что-нибудь вкусненькое 😋`;
        } else {
          message = `${user.first_name} сегодня молодец! Думаю, он заслужил что-нибудь вкусненькое 😋`;
        }
        break;
      case 2:
        if (user.sex == 1) {
          message = `${user.first_name} завершила вечерний ритуал! Немного магии помидорам не помешает! 🌟`;
        } else {
          message = `${user.first_name} завершил вечерний ритуал! Немного магии помидорам не помешает! 🌟`;
        }
        break;
      case 3:
        if (user.sex == 1) {
          message = `${user.first_name} надёжно укрыла помидоры от ночных холодов! Пора и вам под одеялко! 🌒`;
        } else {
          message = `${user.first_name} надёжно укрыл помидоры от ночных холодов! Пора и вам под одеялко! 🌒`;
        }
        break;
      case 4:
        if (user.sex == 1) {
          message = `${user.first_name} гениальный садовод! Ей только в Версале и работать 🌹`;
        } else {
          message = `${user.first_name} гениальный садовод! Ему только в Версале и работать 🌹`;
        }
        break;
      case 5:
        if (user.sex == 1) {
          message = `${user.first_name} лучшая! Благодаря ней вас скоро порадуют вкусные помидорки! 👅`;
        } else {
          message = `${user.first_name} лучший! Благодаря нему вас скоро порадуют вкусные помидорки! 👅`;
        }
        break;
      case 6:
        if (user.sex == 1) {
          message = `${user.first_name} отправила помидоры спать, думаю, вам тоже пора на боковую! 😴`;
        } else {
          message = `${user.first_name} отправил помидоры спать, думаю, вам тоже пора на боковую! 😴`;
        }
        break;
      case 7:
        message = `${user.first_name} садовод дня! Пора бы и вам начать что-то делать! 🤨`;
        break;
      case 8:
        if (user.sex == 1) {
          message = `${user.first_name} конечно молодец, но не скидывайте на неё всю работу! 😥`;
        } else {
          message = `${user.first_name} конечно молодец, но не скидывайте на него всю работу! 😥`;
        }
        break;
      case 9:
        if (user.sex == 1) {
          message = `${user.first_name} пример для вас всех! С ней помидоры в безопасности 😇`;
        } else {
          message = `${user.first_name} пример для вас всех! С ним помидоры в безопасности 😇`;
        }
        break;

      default:
        message = `${user.first_name} закрыл(а) теплицу`;
        break;
    }
    return message;
  }
}

export default new RandPhrase();
