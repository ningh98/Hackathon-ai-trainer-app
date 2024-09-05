
const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.EXPO_PUBLIC_GOOGLE_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
    export const chatSession = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
        {
            role: "user",
            parts: [
              {text: " `Generate a workout plan based on the user information here: ${JSON.stringify(\n      infoData\n    )}. Provide the name of each workout, set, rep, tips of movement, brief description of movement in JSON format.`\n"},
            ],
          },
          {
            role: "model",
            parts: [
              {text: "```json\n{\n  \"workout_plan\": [\n    {\n      \"day\": \"Monday\",\n      \"workout\": \"Chest and Triceps\",\n      \"exercises\": [\n        {\n          \"name\": \"Push-ups\",\n          \"sets\": 3,\n          \"reps\": 10-12\",\n          \"tips\": \"Keep your back straight and core engaged. Lower your chest to the ground and push back up.\",\n          \"description\": \"A classic bodyweight exercise that targets your chest, triceps, and shoulders.\"\n        },\n        {\n          \"name\": \"Incline Dumbbell Press\",\n          \"sets\": 3,\n          \"reps\": 10-12\",\n          \"tips\": \"Use a bench set at a slight incline. Lower the dumbbells to your chest and press back up.\",\n          \"description\": \"A compound exercise that targets your chest and front shoulders.\"\n        },\n        {\n          \"name\": \"Triceps Dips\",\n          \"sets\": 3,\n          \"reps\": 10-12\",\n          \"tips\": \"Use two sturdy chairs or a bench. Lower your body down until your elbows are at a 90-degree angle. Push back up.\",\n          \"description\": \"A bodyweight exercise that targets your triceps.\"\n        },\n        {\n          \"name\": \"Close-Grip Bench Press\",\n          \"sets\": 3,\n          \"reps\": 10-12\",\n          \"tips\": \"Use a barbell with a close grip. Lower the barbell to your chest and press back up.\",\n          \"description\": \"A compound exercise that targets your chest and triceps.\"\n        }\n      ]\n    },\n    {\n      \"day\": \"Wednesday\",\n      \"workout\": \"Back and Biceps\",\n      \"exercises\": [\n        {\n          \"name\": \"Pull-ups\",\n          \"sets\": 3,\n          \"reps\": as many as possible\",\n          \"tips\": \"Use an overhand grip. Hang from the bar with your arms fully extended. Pull yourself up until your chin is over the bar. Lower yourself back down.\",\n          \"description\": \"A compound exercise that targets your back and biceps.\"\n        },\n        {\n          \"name\": \"Bent-Over Row\",\n          \"sets\": 3,\n          \"reps\": 10-12\",\n          \"tips\": \"Use a barbell or dumbbells. Bend at the waist with your back straight. Pull the weight up to your chest. Lower the weight back down.\",\n          \"description\": \"A compound exercise that targets your back, biceps, and rear shoulders.\"\n        },\n        {\n          \"name\": \"Barbell Curls\",\n          \"sets\": 3,\n          \"reps\": 10-12\",\n          \"tips\": \"Use a barbell with an underhand grip. Curl the weight up to your shoulders. Lower the weight back down.\",\n          \"description\": \"An isolation exercise that targets your biceps.\"\n        },\n        {\n          \"name\": \"Seated Cable Rows\",\n          \"sets\": 3,\n          \"reps\": 10-12\",\n          \"tips\": \"Sit on a cable machine with your feet flat on the floor. Pull the cable handle towards your chest. Lower the handle back down.\",\n          \"description\": \"A compound exercise that targets your back and biceps.\"\n        }\n      ]\n    },\n    {\n      \"day\": \"Friday\",\n      \"workout\": \"Legs and Shoulders\",\n      \"exercises\": [\n        {\n          \"name\": \"Squats\",\n          \"sets\": 3,\n          \"reps\": 10-12\",\n          \"tips\": \"Stand with your feet shoulder-width apart. Lower your hips down as if you're sitting in a chair. Push back up to a standing position.\",\n          \"description\": \"A compound exercise that targets your quads, glutes, and hamstrings.\"\n        },\n        {\n          \"name\": \"Lunges\",\n          \"sets\": 3,\n          \"reps\": 10-12 per leg\",\n          \"tips\": \"Step forward with one leg and lower your body until both knees are bent at a 90-degree angle. Push back up to a standing position.\",\n          \"description\": \"A compound exercise that targets your quads, glutes, and hamstrings.\"\n        },\n        {\n          \"name\": \"Military Press\",\n          \"sets\": 3,\n          \"reps\": 10-12\",\n          \"tips\": \"Use a barbell or dumbbells. Hold the weight at shoulder level with your elbows below your wrists. Press the weight straight up over your head. Lower the weight back down.\",\n          \"description\": \"A compound exercise that targets your shoulders.\"\n        },\n        {\n          \"name\": \"Calf Raises\",\n          \"sets\": 3,\n          \"reps\": 15-20\",\n          \"tips\": \"Stand with your feet shoulder-width apart. Raise your heels off the ground. Lower your heels back down.\",\n          \"description\": \"An isolation exercise that targets your calves.\"\n        }\n      ]\n    }\n  ]\n}\n```\n\n**How this code works:**\n\n1. **JSON.stringify(infoData):** This line takes the user's information (which is stored in the `infoData` variable) and converts it into a JSON string.\n2. **Dynamically Generate the Workout Plan:** The code then uses the JSON string to create a dynamic workout plan that is tailored to the user's specific information. For example, if the user is a beginner, the plan might focus on basic exercises and lighter weights.\n3. **Outputting the JSON:** The code outputs the workout plan as a JSON object. This JSON object contains the name of each workout, the number of sets and reps for each exercise, tips for performing the exercise, and a brief description of the exercise.\n\n**Explanation of the Workout Plan:**\n\nThis workout plan is designed for a user who is aiming to build muscle. It is a 3-day split routine that targets different muscle groups on each workout day.\n\n* **Monday (Chest and Triceps):** This workout focuses on the chest and triceps muscles. It includes exercises such as push-ups, incline dumbbell press, triceps dips, and close-grip bench press.\n* **Wednesday (Back and Biceps):** This workout targets the back and biceps muscles. Exercises include pull-ups, bent-over rows, barbell curls, and seated cable rows.\n* **Friday (Legs and Shoulders):** This workout focuses on the legs and shoulders. It includes squats, lunges, military press, and calf raises.\n\n**Tips for Success:**\n\n* **Progressive Overload:** Gradually increase the weight, sets, reps, or difficulty of your exercises over time to challenge your muscles and promote growth.\n* **Proper Form:** Focus on using proper form for all exercises. This will help prevent injuries and maximize muscle activation.\n* **Rest and Recovery:** Allow your muscles to rest for at least 48 hours between workouts to give them time to repair and grow.\n* **Nutrition:** Eat a balanced diet that is high in protein to support muscle growth.\n* **Consistency:** Stick to your workout plan as consistently as possible to see results. \n\n**Important Note:** This is just a sample workout plan. You may need to adjust it based on your individual needs and fitness level. It's always a good idea to consult with a healthcare professional before starting any new exercise program.\n"},
            ],
          },
      ],
    });
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());
