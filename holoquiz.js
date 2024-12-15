
let currentQuestion = 1;
const totalQuestions = 15;

function nextQuestion(next) {
    if (validateSelection(currentQuestion)) {
        document.getElementById(`question${currentQuestion}`).style.display = 'none';
        document.getElementById(`question${next}`).style.display = 'block';
        currentQuestion = next;
    } else {
        alert('Please select an answer before proceeding.');
    }
}

function previousQuestion(prev) {
    document.getElementById(`question${currentQuestion}`).style.display = 'none';
    document.getElementById(`question${prev}`).style.display = 'block';
    currentQuestion = prev;
}

function validateSelection(questionNumber) {
    const options = document.getElementsByName(`question${questionNumber}`);
    for (let option of options) {
        if (option.checked) {
            return true;
        }
    }
    return false;
}

function showLoadingAnimation() {
    if (validateSelection(currentQuestion)) {
        document.getElementById('quizForm').style.display = 'none';
        document.getElementById('loading').style.display = 'block';
        setTimeout(calculateResult, 3000); // Simulate loading time
    } else {
        alert('Please select an answer before submitting.');
    }
}

function calculateResult() {
    const scores = {
        "Mori Calliope": 0,
        "Takanashi Kiara": 0,
        "Ninomae Inanis": 0,
        "Gawr Gura": 0,
        "Watson Amelia": 0,
        "IRyS": 0,
        "Ceres Fauna": 0,
        "Ouro Kronii": 0,
        "Nanashi Mumei": 0,
        "Hakos Baelz": 0,
        "Shiori Novella": 0,
        "Koseki Bijou": 0,
        "Nerissa Ravencroft": 0,
        "Fuwawa Abyssgard": 0,
        "Mococo Abyssgard": 0,
        "Elizabeth Rose Bloodflame": 0,
        "Gigi Murin": 0,
        "Cecilia Immergreen": 0,
        "Raora Panthera": 0
    };

    const answerKey = {
        "question1": {
            "A": ["Gawr Gura", "Hakos Baelz", "Ninomae Inanis"],
            "B": ["Shiori Novella", "Elizabeth Rose Bloodflame", "fuwawa Abyssgard", "Mococo Abyssgard"],
            "C": ["Ceres Fauna", "Raora Panthera", "Nerissa Ravencroft", "Nanashi Mumei"],
            "D": ["Watson Amelia", "Ouro Kronii", "Takanashi Kiara"],
            "E": ["Gigi Murin", "Cecilia Immergreen", "Koseki Bijou"]
        },
        "question2": {
            "A": ["Mori Calliope", "", "Fuwawa Abyssgard", "Watson Amelia", "Mococo abyssgard"],
            "B": ["Ninomae Inanis", "Raora Panthera",],
            "C": ["Gawr Gura", "Ceres Fauna", "Ouro Kronii", "Nerissa Ravencroft"],
            "D": ["Shiori Novella", "IRyS", "Hakos Baelz"],
            "E": ["Cecilia Immergreen", "Gigi Murin", "Takanashi Kiara"]
        },
        "question3": {
            "A": ["Gawr Gura", "Ninomae Inanis", "Mococo Abyssgard"],
            "B": ["Fuwawa Abyssgard", "Koseki Bijou", "Elizabeth Rose Bloodflame"],
            "C": ["Ceres Fauna", "Nanashi Mumei", "Raora Panthera"],
            "D": ["Mori Calliope", "Takanashi Kiara", "Hakos Baelz"],
            "E": ["Gigi Murin", "Shiori Novella", "Watson Amelia"]
        },
        "question3": {
            "A": ["Elizabeth Rose Bloodflame", "Cecilia Immergreen", "Mococo Abyssgard"],
            "B": ["Ninomae Inanis", "Gawr Gura", "Koseki Bijou"],
            "C": ["Hakos Baelz", "Mori Calliope", "Nerissa Ravencroft"],
            "D": ["Raora Panthera", "Gigi Murin", "Fuwawa Abyssgard", "Ouro Kronii"],
            "E": ["Shiori Novella", "Watson Amelia", "Nanashi Mumei"]
        },
        "question4": {
            "A": ["Watson Amelia", "IRyS", "Mori Calliope", "Takanashi Kiara", "Ouro Kronii"],
            "B": ["Ninomae Inanis", "Nerissa Ravencroft", "Mococo Abyssgard"],
            "C": ["Gigi Murin", "Raora Panthera", "Koseki Bijou"],
            "D": ["Fuwawa Abyssgard", "Nanashi Mumei", "Shiori Novella"],
            "E": ["Elizabeth Rose Bloodflame", "Cecilia Immergreen", "Ceres Fauna", "Gawr Gura"]
        },
        "question5": {
            "A": ["Nanashi Mumei", "Ninomae Inanis", "Takanashi Kiara"],
            "B": ["Fuwawa Abyssgard", "Koseki Bijou", "Mococo Abyssgard"],
            "C": ["IRyS", "Mori Calliope", "Raora Panthera"],
            "D": ["Watson Amelia", "Hakos Baelz", "Ceres Fauna", "Shiori Novella"],
            "E": ["Elizabeth Rose Bloodflame", "Gigi Murin", "Gawr Gura"]
        },
        "question6": {
            "A": ["Gawr Gura", "Mori Calliope", "Nanashi Mumei", "Cecilia Immergreen"],
            "B": ["Ninomae Inanis", "Ceres Fauna", "Elizabeth Rose Bloodflame"],
            "C": ["Raora Panthera", "Shiori Novella", "Watson Amelia"],
            "D": ["Hakos Baelz", "Gigi Murin", "Nerissa Ravencroft", "Takanashi Kiara"],
            "E": ["Koseki Bijou", "IRyS", "Fuwawa Abyssgard", "Ouro Kronii"]
        },
        "question7": {
            "A": ["Hakos Baelz", "Gigi Murin", "Raora Panthera", "Mori Calliope"],
            "B": ["Ceres Fauna", "Nanashi Mumei", "Shiori Novella", "Ouro Kronii"],
            "C": ["Ninomae Inanis", "Takanashi Kiara", "Gawr Gura", "Cecilia Immergreen"],
            "D": ["Koseki Bijou", "Watson Amelia", "IRyS", "Fuwawa Abyssgard"],
            "E": ["Fuwawa Abyssgard", "Nerissa Ravencroft", "Elizabeth Rose Bloodflame", "Mococo Abysgard"]
        },
        "question8": {
            "A": ["Watson Amelia", "Nerissa Ravencroft", "IRyS"],
            "B": ["Mori Calliope", "Gigi Murin", "Fuwawa Abyssgard"],
            "C": ["Shiori Novella", "Koseki Bijou", "Nanashi Mumei"],
            "D": ["Ninomae Inanis", "Raora Panthera", "Gawr Gura"],
            "E": ["Elizabeth Rose Bloodflame", "Hakos Baelz", "Ceres Fauna", "Cecilia Immergreen"]
        },
        "question9": {
            "A": ["Shiori Novella", "IRyS", "Mori Calliope", "Ouro Kronii"],
            "B": ["Elizabeth Rose Bloodflame", "Nerissa Ravencroft" , "Koseki Bijou"],
            "C": ["Fuwawa Abyssgard", "Raora Panthera", "Gigi Murin"],
            "D": ["Nanashi Mumei", "Hakos Baelz", "Mococo Abyssgard", "Gawr Gura"],
            "E": ["Watson Amelia", "Ceres Fauna", "Ninomae Inanis", "Takanashi Kiara"]
        },
        "question10": {
            "A": ["Watson Amelia", "Shiori Novella", "Fuwawa Abyssgard"],
            "B": ["Gawr Gura", "IRyS", "Raora Panthera", "Cecilia Immergreen"],
            "C": ["Ceres Fauna", "Nanashi Mumei", "Koseki Bijou"],
            "D": ["Hakos Baelz", "Gigi Murin", "Nerissa Ravencroft"],
            "E": ["Mori Calliope", "Elizabeth Rose Bloodflame", "Ninomae Inanis"]
        },
        "question11": {
            "A": ["Gawr Gura", "Mori Calliope","Mococo Abyssgard"],
            "B": ["Takanashi Kiara", "Hakos Baelz"],
            "C": ["Ninomae Inanis", "Ceres Fauna", "Koseki Bijou"],
            "D": ["Cecilia Immergreen"],
            "E": ["Watson Amelia", "Ouro Kronii"],
        },
        "question12": {
            "A": ["Mori Calliope", "Ouro Kronii", "Shiori Novella",],
            "B": ["Ninomae Inanis", "Fuwawa Abyssgard", "Mococo Abyssgard"],
            "C": ["Nerissa Ravencroft", "Gawr Gura"],
            "D": ["Raora Panthera", "Ceres Fauna", "Cecilia Immergreen"],
            "E": ["Elizabeth Rose Bloodflame", "Nerissa Ravencroft", "Gigi Murin"],
        },
        "question13": {
            "A": ["Mori Calliope", "Takanashi Kiara"],
            "B": ["Ninomae Inanis", "Gawr Gura", "IRyS"],
            "C": ["Hakos Baelz", "Fuwawa Abyssgard", "Mococo Abyssgard"],
            "D": ["Shiori Novella", "Koseki Bijou", "Cecilia Immergreen"],
            "E": ["Nanashi Mumei", "Elizabeth Rose Bloodflame", "IRyS"],
        },
        "question14": {
            "A": ["Watson Amelia", "Raora Panthera"],
            "B": ["Koseki Bijou", "Shiori Novella", "Gigi Murin"],
            "C": ["Fuwawa Abyssgard", "Mococo Abyssgard", "Hakos Baelz"],
            "D": ["Ceres Fauna", "IRyS", "Ouro Kronii"],
            "E": ["Mori Calliope", "Gawr Gura", "Cecilia Immergreen"],
        },
        "question15": {
            "A": ["Cecilia Immergreen", "IRyS", "Ouro Kronii"],
            "B": ["Mori Caliiope", "Raora Panthera"],
            "C": ["Gawr gura", "Mococo Abyssgard", "Takanashi Kiara"],
            "D": ["Gigi Murin", "Nanashi Mumei", "Watson Amelia"],
            "E": ["Fuwawa Abyssgard", "Nerissa Ravencroft"],
        },

    };

    for (let i = 1; i <= totalQuestions; i++) {
        const selectedOption = document.querySelector(`input[name="question${i}"]:checked`).value;
        const characterList = answerKey[`question${i}`][selectedOption];
        characterList.forEach(character => {
            scores[character]++;
        });
    }

    let maxScore = 0;
    let resultCharacter = '';

    for (const [character, score] of Object.entries(scores)) {
        if (score > maxScore) {
            maxScore = score;
            resultCharacter = character;
        }
    }

    displayResult(resultCharacter);
}

function displayResult(character) {
    const resultText = document.getElementById('resultText');
    const resultImage = document.getElementById('resultImage');

    const characterImages = {
        "Mori Calliope": "https://static.miraheze.org/hololivewiki/5/57/Mori_Calliope_-_Portrait_01-1.png",
        "Takanashi Kiara": "https://static.miraheze.org/hololivewiki/6/6e/Takanashi_Kiara_-_Portrait_01.png",
        "Ninomae Inanis": "https://static.miraheze.org/hololivewiki/4/47/Ninomae_Ina%27nis_-_Portrait_01-1.png",
        "Gawr Gura": "https://static.miraheze.org/hololivewiki/6/69/Gawr_Gura_-_Portrait_01.png",
        "Watson Amelia": "https://static.miraheze.org/hololivewiki/e/e8/Watson_Amelia_-_Portrait_01.png",
        "IRyS": "https://static.miraheze.org/hololivewiki/d/dc/IRyS_-_Portrait_02.png",
        "Ceres Fauna": "https://static.miraheze.org/hololivewiki/a/ab/Ceres_Fauna_-_Portrait_01.png",
        "Ouro Kronii": "https://static.miraheze.org/hololivewiki/a/a1/Ouro_Kronii_-_Portrait_01.png",
        "Nanashi Mumei": "https://static.miraheze.org/hololivewiki/8/80/Nanashi_Mumei_-_Portrait_01.png",
        "Hakos Baelz": "https://static.miraheze.org/hololivewiki/1/16/Hakos_Baelz_-_Portrait_01.png",
        "Shiori Novella": "https://static.miraheze.org/hololivewiki/0/03/Shiori_Novella_-_Portrait_01.png",
        "Koseki Bijou": "https://static.miraheze.org/hololivewiki/9/9f/Koseki_Bijou_-_Portrait_01.png",
        "Nerissa Ravencroft": "https://static.miraheze.org/hololivewiki/3/3c/Nerissa_Ravencroft_-_Portrait_01.png",
        "Fuwawa Abyssgard": "https://static.miraheze.org/hololivewiki/d/d0/Fuwawa_Abyssgard_-_Portrait_01.png",
        "Mococo Abyssgard": "https://static.miraheze.org/hololivewiki/e/e8/Mococo_Abyssgard_-_Portrait_01.png",
        "Elizabeth Rose Bloodflame": "https://static.miraheze.org/hololivewiki/a/a0/Elizabeth_Rose_Bloodflame_-_Portrait_01.png",
        "Gigi Murin": "https://static.miraheze.org/hololivewiki/0/03/Gigi_Murin_-_Portrait_01.png",
        "Cecilia Immergreen": "https://static.miraheze.org/hololivewiki/0/0d/Cecilia_Immergreen_-_Portrait_01.png",
        "Raora Panthera": "https://static.miraheze.org/hololivewiki/c/c2/Raora_Panthera_-_Portrait_01.png"
    };

    resultText.textContent = `You are ${character}!`;
    resultImage.src = characterImages[character] || '';
    resultImage.style.display = characterImages[character] ? 'block' : 'none';

    document.getElementById('loading').style.display = 'none';
    document.getElementById('result').style.display = 'block';
}
const images = [
    'url("https://i.postimg.cc/c1YH5t25/wallpaperflare-com-wallpaper.jpg")',
    'url("https://i.postimg.cc/qqYzn258/promise.jpg")',
    'url("https://i.postimg.cc/DfWsfzDq/Advent-KV.webp")',
    'url("https://i.postimg.cc/zGNRkFfj/justice.jpg")'
  ];
  let currentImage = 0;

  function changeBackground() {
    document.body.style.backgroundImage = images[currentImage];
    currentImage = (currentImage + 1) % images.length; // Cycle through the images
  }

  setInterval(changeBackground, 15000);

  changeBackground();
  
  window.addEventListener('click', function() {
    document.getElementById('music').play();
  });
  
