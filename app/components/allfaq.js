export default {
  mastercontrol:[
    {
      question: "Why can't I see my DirecTV box?",
      answer: "Master Control connects to your DirecTV boxes over the local network. You can verify that your box is connected by checking the network settings for a local IP address."
    },
    {
      question: "What DirecTV hardware does Master Control work with?",
      answer: "Master Control works with any network connected DirecTV receiver. This includes the H20, HR20, H21, HR21, H22, HR22, H23, HR23, H24, HR24, H25, HR25, HR34, H44, HR44, H54, C41, C41W, C51, C61 and C61K"
    }
  ]
,
  mastercaster: [
    {
      question: "How can I cast podcasts with Master Caster?",
      answer: "Master Caster has an action extension that adds casting support for Apple Podcasts and Overcast. Share a podcast from either app to bring up the system share sheet and launch the Master Caster extension."
    }
  ],
  quicktwitch: [
    {
      question: "Why does nothing happen when I click a stream?",
      answer: "Twitch requires you to be logged in to retreive raw video stream links. Authenticate with Twitch by clicking the button in the top right of the window."
    },
    {
      question: "I'm logged in and streams still won't open. What gives?",
      answer: "QuickTwitch depends on livestreamer and VLC for playing Twitch streams. Please make sure you have both installed."
    }
  ],
  pod2watch: [
    {
      question: "Why can't I find my podcasts in Pod2Watch?",
      answer: "Pod2Watch shares the same media library as the Apple Podcasts app. Download the missing podcast in Apple Podcasts and it will be visible to Pod2Watch."
    },
    {
      question: "How long does it take to send a podcast to my Apple Watch?",
      answer: "The answer can depend on a number of factors.  In my experience, it can take anywhere between 15 and 30 minutes to send an hour long podcast."
    },
    {
      question: "Why are podcast transfers so slow?",
      answer: "As a developer you have very little control over the iPhone/Apple Watch transfer process. iOS uses a combination of Bluetooth and Wi-Fi to optimize for battery life. Charging your Apple Watch may speed up a transfer."
    },
    {
      question: "Why is progress of transfers not visible?",
      answer: "iOS does not make this transfer progress percentage available to a program.  iOS will only notify a program once a transfer is complete."
    }
  ]

}
