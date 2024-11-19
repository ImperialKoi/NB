import React, { useState, useEffect } from 'react';
import './Game.css';
import background from './background.jpg';
import factoryImage from './factory.png';
import waterBottle from './water_bottle.png';
import landfill from './landfill.png';
import yarn from './yarn.png';
import shirt from './shirt.png';
import cotton from './cotton.png'
import hat from './hat.png'

const Game = () => {
    const [money, setMoney] = useState(0);
    const [factories, setFactories] = useState({
        Organisoft: 0,
        Processing: 1,
        Production: 1,
    });
    const [factoryUpgrades, setFactoryUpgrades] = useState({
        Organisoft: { level: 0, timerReduction: 0.5, cost: 50 },
        Processing: { level: 0, timerReduction: 0.5, cost: 100 },
        Production: { level: 0, timerReduction: 0.5, cost: 150 },
    });
    const [conveyorItems, setConveyorItems] = useState([]);
    const [waterBottleCount, setWaterBottleCount] = useState(0);
    const [yarnCount, setYarnCount] = useState(0);
    const [storeGrowing, setStoreGrowing] = useState(false);
    const [yarnTimerRemaining, setYarnTimerRemaining] = useState(0);
    const [shirtTimerRemaining, setShirtTimerRemaining] = useState(0);
    const [yarnProductionTimer, setYarnProductionTimer] = useState(false); // Track yarn timer
    const [shirtProductionTimer, setShirtProductionTimer] = useState(false);
    const [cottonCount, setCottonCount] = useState(0);  // Track cotton
    const [hatCount, setHatCount] = useState(0);  // Track hats

    const [savedBottlesCount, setSavedBottlesCount] = useState(0);
    const [waterSaved, setWaterSaved] = useState(0); // Gallons
    const [chemicalsSaved, setChemicalsSaved] = useState(0); // Pounds
    const [electricitySaved, setElectricitySaved] = useState(0); // KWH
    const [CO2Saved, setCO2Saved] = useState(0); // Pounds

    const handleButtonClick = (buttonName, cost) => {
        if (money >= cost && factories[buttonName] === 0) { // Check if enough money and no existing factory
            setMoney(money - cost);
            setFactories((prevFactories) => ({
                ...prevFactories,
                [buttonName]: 1, // Set the factory variable to 1
            }));
        }
    };

    const LandfillClick = () => {
        setConveyorItems((prev) => [
            ...prev,
            { type: 'waterBottle', id: Date.now() },
        ]);
        setSavedBottlesCount((prevCount) => prevCount + 1); 
    };

    useEffect(() => {
        if (factories.Organisoft === 1) {
            const cottonInterval = setInterval(() => {
                setConveyorItems((prevItems) => [
                    ...prevItems,
                    { type: 'cotton', id: Date.now() },
                ]);
                setWaterSaved((prev) => prev + 71); // 71 gallons per yarn
                setChemicalsSaved((prev) => prev + 0.11); // 0.11 pounds per yarn
                setElectricitySaved((prev) => prev + 2);
            }, 1500);  // Produce one cotton every 0.5 seconds

            return () => clearInterval(cottonInterval);  // Clear the interval when factory is no longer active
        }
    }, [factories.Organisoft]);

    const updateCounters = (item) => {
        if (item.type === 'waterBottle') {

            const yarnFactory = factoryUpgrades.Processing;
            const yarnTimer = 3 - yarnFactory.timerReduction; // Apply timer reduction

            setWaterBottleCount((prevCount) => {
                const newCount = prevCount + 1;
                if (newCount >= 7 && !yarnProductionTimer) {
                    setYarnProductionTimer(true);
                    setYarnTimerRemaining(3); // Set visual timer to 3 seconds
    
                    const timerInterval = setInterval(() => {
                        setYarnTimerRemaining((prev) => {
                            if (prev <= 1) {
                                clearInterval(timerInterval);
                                return 0;
                            }
                            return prev - 1;
                        });
                    }, 1000);
    
                    setTimeout(() => {
                        setConveyorItems((prevItems) => [
                            ...prevItems,
                            { type: 'yarn', id: Date.now() },
                        ]);
                        setWaterBottleCount((prev) => prev - 7);
                        setYarnProductionTimer(false);

                        setWaterSaved((prev) => prev + 71); // 71 gallons per yarn
                        setChemicalsSaved((prev) => prev + 0.11); // 0.11 pounds per yarn
                        setElectricitySaved((prev) => prev + 2); // 2.1 KWH per yarn

                    }, 3000);
                }
                return newCount;
            });
        } else if (item.type === 'yarn') {
            const shirtFactory = factoryUpgrades.Production;
            const shirtTimer = 3 - shirtFactory.timerReduction; 

            setYarnCount((prevCount) => {
                const newCount = prevCount + 1;
                if (newCount >= 3 && !shirtProductionTimer) {
                    setShirtProductionTimer(true);
                    setShirtTimerRemaining(3); // Set visual timer to 3 seconds
    
                    const timerInterval = setInterval(() => {
                        setShirtTimerRemaining((prev) => {
                            if (prev <= 1) {
                                clearInterval(timerInterval);
                                return 0;
                            }
                            return prev - 1;
                        });
                    }, 1000);
    
                    setTimeout(() => {
                        setConveyorItems((prevItems) => [
                            ...prevItems,
                            { type: 'shirt', id: Date.now() },
                        ]);
                        setYarnCount((prev) => prev - 3);
                        setShirtProductionTimer(false);
                        setCO2Saved((prev) => prev + 1);
                    }, 3000);
                }
                return newCount;
            });
        } else if (item.type === 'shirt') {
            setMoney((prevMoney) => prevMoney + 100); // Add $100 for each shirt
            setConveyorItems((prevItems) => prevItems.filter((el) => el.id !== item.id));
            setStoreGrowing(true);
        } else if (item.type === 'cotton') {
            setCottonCount((prevCount) => {
                const newCount = prevCount + 1;
                if (newCount >= 3) {
                    // Produce a hat
                    setConveyorItems((prevItems) => [
                        ...prevItems,
                        { type: 'hat', id: Date.now() },
                    ]);
                    setCottonCount((prev) => prev - 3);
                    setStoreGrowing(true);
                    setCO2Saved((prev) => prev + 1)
                }
                return newCount;
            });
        } else if (item.type === 'hat') {
            setConveyorItems((prevItems) => prevItems.filter((el) => el.id !== item.id));
            setMoney((prevMoney) => prevMoney + 100); // Add $100 for each shirt
            setStoreGrowing(true);
        }
    };            

    const handleAnimationEnd = (item) => {
        // Increment the respective counter and remove item from the conveyor
        updateCounters(item);
        
        // Remove the item from the conveyorItems array
        setConveyorItems((prevItems) =>
            prevItems.filter((conveyorItem) => conveyorItem.id !== item.id)
        );
        
    };

    return (
        <div className="game-background" style={{ backgroundImage: `url(${background})` }}>
            <div className="money-display">Money: ${money}</div>
            {/* Environmental Stats */}
            <div className="environmental-stats" style={{ position: 'absolute', top: '10px', left: '20px' }}>
                <div>Total Saved Bottles: {savedBottlesCount}</div>
                <div>Water Saved: {waterSaved} gallons</div>
                <div>Chemicals Saved: {chemicalsSaved} pounds</div>
                <div>Electricity Saved: {electricitySaved} KWH</div>
                <div>CO2 Saved: {CO2Saved} pounds</div>
            </div>

            {/* Yarn Timer */}
            <div className="timer-container" style={{ top: '200px', left: '700px' }}>
                {yarnTimerRemaining > 0 && (
                    <div className="timer">
                        Yarn Timer: {yarnTimerRemaining}s
                        <div
                            className="timer-bar"
                            style={{
                                width: `${(yarnTimerRemaining / 3) * 100}%`,
                            }}
                        ></div>
                    </div>
                )}
            </div>

            {/* Shirt Timer */}
            <div className="timer-container" style={{ top: '400px', left: '700px' }}>
                {shirtTimerRemaining > 0 && (
                    <div className="timer">
                        Shirt Timer: {shirtTimerRemaining}s
                        <div
                            className="timer-bar"
                            style={{
                                width: `${(shirtTimerRemaining / 3) * 100}%`,
                            }}
                        ></div>
                    </div>
                )}
            </div>

            {/* Landfill */}
            <div
                className="landfill"
                onClick={LandfillClick}
                style={{ backgroundImage: `url(${landfill})`, top: '80px', left: '200px' }}
            ></div>

            {/* Conveyor Belt with Water Bottles */}
            <div className="conveyor-belt">
                {conveyorItems.map((item) => (
                    <img
                        key={item.id}
                        src={
                            item.type === 'waterBottle' ? waterBottle :
                            item.type === 'yarn' ? yarn :
                            item.type === 'shirt' ? shirt :
                            item.type === 'cotton' ? cotton : hat
                        }
                        alt={item.type}
                        className={`conveyor-item ${item.type}`}
                        onAnimationEnd={() => handleAnimationEnd(item)}
                    />
                ))}
            </div>

            {/* Store */}
            <div 
                className={`store ${storeGrowing ? 'store-grow' : ''}`} 
                style={{ top: '384px', left: '1070px' }} 
                onAnimationEnd={() => setStoreGrowing(false)}
            />

            {/* Organisoft Button */}
            <div className="button-container" style={{ top: '152px', left: '682px' }}>
                {factories.Organisoft === 0 ? (
                    <>
                        <div className="tooltip">$1500</div>
                        <button
                            className="game-button"
                            onClick={() => handleButtonClick('Organisoft', 1500)}
                        >
                            Organisoft
                        </button>
                    </>
                ) : (
                    <img src={factoryImage} alt="Factory" className="factory-image" />
                )}
            </div>

            {/* Processing Button */}
            <div className="button-container" style={{ top: '322px', left: '682px' }}>
                {factories.Processing === 0 ? (
                    <>
                        <div className="tooltip">$1500</div>
                        <button
                            className="game-button"
                            onClick={() => handleButtonClick('Processing', 150)}
                        >
                            Processing
                        </button>
                    </>
                ) : (
                    <img src={factoryImage} alt="Factory" className="factory-image" />
                )}
            </div>

            {/* Production Button */}
            <div className="button-container" style={{ top: '482px', left: '682px' }}>
                {factories.Production === 0 ? (
                    <>
                        <div className="tooltip">$200</div>
                        <button
                            className="game-button"
                            onClick={() => handleButtonClick('Production', 200)}
                        >
                            Production
                        </button>
                    </>
                ) : (
                    <img src={factoryImage} alt="Factory" className="factory-image" />
                )}
            </div>
        </div>
    );
};

export default Game;