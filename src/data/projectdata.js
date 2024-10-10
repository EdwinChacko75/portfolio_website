// const projectData = [
//     {
//         id: 1,
//         title: "spectro",
//         tech: "",
//         github_url: "",
//         live_url: "",
        
//     },
//     {
//         id: 2,
//         title: "j-ir-vis",
//         tech: "",
//         github_url: ""
//     },
//     {
//         id: 3,
//         title:"chess engine",
//         tech: "",
//         github_url: ""
//     },
//     {
//         id: 4,
//         title: "NNUE (efficently update nn)",
//         tech: "",
//         github_url: "",
//         live_url: "",

//     },
//     {
//         id: 5,
//         title: "Hotdog classifier",
//         tech: "",
//         github_url: ""
//     },
//     // {
//     //     id: 6,
//     //     title: "",
//     //     tech: "",
//     //     github_url: "",
//     // }
// ];
const projectData = [
    {
      id: 1,
      title: "Spectro",
      description: "Worked extensively with TensorFlow, PyTorch, and NumPy to create the Spectro workflow. Consists of 2 models, Spectro, an RNN + LSTM decoder, and j-IR-vis, a CNN + MLP.",
      image: "https://raw.githubusercontent.com/EdwinChacko75/portfolio_website/master/src/assets/main_diagram_md.png", 
      tech: "TensorFlow, PyTorch, NumPy, Linux, Docker",
    //   github_url: "https://github.com/yourusername/project1",
    //   live_url: "https://edwinchacko75.github.io/ultimate-chess/pages/single.html",
        coming_soon: '1'
    },
    {
        id: 2,
        title: "Ultimate Chess",
        description: "Hardware optimized C++ chess engine designed for performance. Utilizing techniques such as Bitboards, Piece-Square Tables, and complie-time computations. Implemented zorbist hashing, transposition table, alpha-beta pruning, and quiscence search. Utilized CUDA for move search when avalible. Integrating NNUE for evaluation.",
        image: "https://raw.githubusercontent.com/EdwinChacko75/portfolio_website/refs/heads/master/src/assets/ult-chess.png", 
        tech: "C++, CUDA, Linux, Docker, Postman, REST API",
        github_url: "https://github.com/EdwinChacko75/chess-engine",
        live_url: "https://edwinchacko75.github.io/ultimate-chess/pages/single.html"
    },
    {
        id: 3,
        title: "Chess NNUE (Efficently Updatable Neural Network)",
        description: "Developing NNUE static evaluation to integrate with my chess engine. Currently reaching 80% accuracy with int_8 quantized model. Working with a dataset of 83 million data points.",
        image: "https://raw.githubusercontent.com/EdwinChacko75/portfolio_website/f5604136364650578da57dc11d9ce9c164259c6e/src/assets/nnue.svg", 
        tech: "PyTorch, NumPy, SQL, HDF5",
        github_url: "https://github.com/EdwinChacko75/nnue",
        // live_url: "https://project1-demo.com"
    
    },
    {
        id: 4,
        title: "Natural Language Computing",
        description: "Taking CSC401 at UofT. Applications such as information retrieval, speech recognition and synthesis, machine translation, summarization, and dialogue. N-grams, corpus analysis, neural methods, and information theory.",
        image: "https://raw.githubusercontent.com/EdwinChacko75/portfolio_website/master/src/assets/python.png", 
        tech: "PyTorch, Transformers, sk-learn, NumPy, pandas",
        github_url: "https://github.com/EdwinChacko75/UofT-Coursework/tree/main/CSC401",
        live_url: "https://artsci.calendar.utoronto.ca/course/csc401h1"
    
    },
    {
        id: 5,
        title: "Computational Linguistics",
        description: "Taking CSC485 at UofT. Topics applied in assignments: context-free grammars; chart parsing, statistical parsing; semantics and semantic interpretation; ambiguity resolution techniques; reference resolution.",
        image: "https://raw.githubusercontent.com/EdwinChacko75/portfolio_website/master/src/assets/python.png", 
        tech: "PyTorch, NLTK, Transformers, NumPy",
        github_url: "https://github.com/EdwinChacko75/UofT-Coursework/tree/main/CSC485",
        live_url: "https://artsci.calendar.utoronto.ca/course/csc485h1"
    
    },
    {
        id: 6,
        title: "Personal Remote ML Server",
        description: "Reconfigured my retired cryptocurrency mining rig into a remote ML server to train and test my models. Achieved 10-20x faster training times and up to 40x faster in distributed training.",
        image: "https://raw.githubusercontent.com/EdwinChacko75/portfolio_website/refs/heads/master/src/assets/eth.png", 
        tech: "CUDA, Shell Scripting, Linux, Docker",
        // github_url: "https://github.com/yourusername/project1",
        // live_url: "https://project1-demo.com"
    
    },
    // ... other projects
  ];
  
export default projectData;
