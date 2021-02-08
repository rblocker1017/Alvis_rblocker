import React from 'react';
import './App.css';
import Header from './componenets/layout/header'

import { BrowserRouter, Route} from "react-router-dom";
import  BubbleSort  from "./pages/bubbleSort";
import Home from './pages/Home'
import  CPUScheduling  from "./pages/CPUScheduling";
import RoundRobin from "./pages/roundRobin"
import Tree from "./pages/treeViewer";
import PageReplacement from "./pages/PageReplacement";
import DiskScheduling from "./pages/DiskScheduling";
import GraphingAlgorithm from "./pages/GraphingAlgorithm";


function App() {
  return (
    <div className="App">
    <BrowserRouter>

      <Route path="/bubblesort" exact  component={BubbleSort} />
      <Route path="/Home" exact component={PageReplacement} />
      <Route path="/" exact component={PageReplacement} />
      <Route path="/CpuScheduling" exact component={CPUScheduling}/>
      <Route path="/tree" exact component={Tree}/>
      <Route path="/PageReplacement" exact component={PageReplacement}/>
      <Route path="/GraphingAlgorithm" exact component={GraphingAlgorithm} />


      <Route path="/RoundRobin" exact component={RoundRobin}/>
      <Route path="/FCFSDisk" exact component={DiskScheduling}/>

    </BrowserRouter>


    </div>
  );
}

export default App;
