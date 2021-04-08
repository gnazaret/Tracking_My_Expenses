import React, { useEffect }  from 'react'
import Chart from 'chart.js/auto';


const PieChart = () => {

    useEffect(() => {
        const makeApiCall = async () => {
            try {
                const res = await fetch ('/api/tracking/');
                const json = await res.json();
                const formattedData = prepareData(json);
                createChart(formattedData)

            } catch (error) {
                console.error(error)
            }
        }
        makeApiCall();

    }, [])
    const prepareData = (transactions) => {
        const charData = {
            labels: [],
            datasets: [{
                label: 'Income',
                data: [],
                backgroundColor: [
                    "rgba(46, 204, 113, 1)"
                    
                    
                ]
                }, {
                    label: 'Expenses',
                    data: [],
                    backgroundColor: [
                        "rgba(240, 52, 52, 1)"
                       
                    ]
                    }]
        }
       
       transactions.forEach(transaction => {
            // charData.labels.push(transaction._id);
            transaction.amount < 0 ? charData.datasets[1].data.push(transaction.amount) : charData.datasets[0].data.push(transaction.amount);

        })
        console.log(charData)
        return charData
    }

    const createChart = (data) => {
        const ctx = document.querySelector('#transactions').getContext('2d');
        const transChart = new Chart(ctx, {
            type: 'pie',
            data: data
            
        })
    }

    return (
        <>
            
            <canvas id="transactions"></canvas>
        </>
    )
}

export default PieChart;

