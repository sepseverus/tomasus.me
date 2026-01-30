---
title: "~~Attention~~Electricity is all you need..."
pubDatetime: 2026-01-30T15:38:17.495Z
description: "A beginner-friendly guide to voltage, current, resistance, and power, and why electricity is now the single biggest constraint on AI growth."
ogImage: ../../assets/images/electricity-water-analogy-study.jpg
category: Tech
tags:
  - electricity
  - AI
  - data-centers
  - energy
  - infrastructure
---

Every time you ask ChatGPT a question, somewhere on Earth a GPU draws 700 watts of power. Billions of transistors flip on and off. Heat radiates into cooling systems. And a power grid built in the 1960s strains a little harder.

We talk about AI in terms of models, parameters, and benchmarks. But underneath all of it sits a physical reality that most people in tech never learn about: electricity.

In 2026, electricity has become the single largest constraint on AI growth. Not talent. Not algorithms. Not data. Electricity.

This post explains the basics for people who work in AI but never took a physics class. If you understand these fundamentals, you'll understand why companies build data centers next to nuclear plants. Why NVIDIA's power specs matter more than their transistor counts. And why your electricity bill is going up.

![From Electrons to Intelligence — Why electricity is the real bottleneck for AI](/images/electricity-ai-visualization.png)

## Think of It Like Water

The best way to understand electricity is to think of water flowing through pipes. This analogy isn't perfect, but it maps surprisingly well to the four quantities that govern all electrical behavior.

![The Water Analogy for Electricity](/images/electricity-water-analogy-study.jpg)

Picture a water tower connected to a pipe system. The tower's height creates pressure that pushes water through the pipes. Some pipes are wide, some are narrow. The narrow ones restrict flow and generate friction (heat).

The total amount of useful work the water does depends on both the pressure and how much water flows through.

That's electricity. Replace "water" with "electrons" and you have the whole model.

## The Four Things You Need to Know

### Voltage: The Pressure

Voltage is the force that pushes electrons through a wire. Measured in volts (V).

A 9V battery is a small water tower. A US wall outlet at 120V is a bigger one. A power transmission line at 765,000V is Niagara Falls. The higher the voltage, the harder electrons get pushed.

Here's the key insight: voltage exists even when nothing flows. A battery sitting on a shelf has voltage, like a water tower full of water with the valve closed. It's potential energy, waiting to do work.

Power companies use extremely high voltages (up to 765,000V) for long-distance transmission because higher voltage means less energy lost to heat along the way. Transformers step it down to 120V or 230V before it reaches your home or data center.

### Current: The Flow

Current is how many electrons actually move through the wire per second. Measured in amperes, or amps (A). One amp equals about 6.2 quintillion electrons passing a single point every second.

If voltage is water pressure, current is the volume of water flowing. A garden hose and a fire hose can have the same pressure, but the fire hose moves far more water.

Two types of current matter:

**DC (Direct Current)** flows in one direction. Your phone, laptop, and every chip inside every server runs on DC. Batteries produce DC. Solar panels produce DC.

**AC (Alternating Current)** reverses direction 50 or 60 times per second. It's what comes out of your wall outlet and what flows through the power grid. AC won because transformers can easily change its voltage level, making long-distance transmission practical.

Every data center converts AC from the grid into DC for its servers. That conversion wastes energy as heat.

### Resistance: The Friction

Resistance is how much a material fights against current flow. Measured in ohms. Copper wire has low resistance (electrons flow easily). Rubber has high resistance (electrons barely move).

The water analogy: resistance is the width of the pipe. Wide pipe, easy flow. Narrow pipe, restricted flow and friction.

Here's why resistance matters for AI: friction creates heat. Every wire, every chip, every component in a data center has some resistance. Electrons pushing through that resistance convert electrical energy into heat. This is why cooling is the second largest expense in data centers, right after the electricity itself.

Four things increase resistance: longer wires, thinner wires, hotter temperatures, and certain materials. This is why data centers use thick copper bus bars, keep rooms cold, and chip designers obsess over the distance between components on a die.

**Semiconductors** are the special case. Silicon's resistance can be controlled by adding tiny amounts of other elements (doping). This controllable resistance is the physical property that makes transistors possible.

Without semiconductors, there are no transistors. Without transistors, there are no computers. Without computers, there is no AI.

### Power: The Work

Power is the rate at which electrical energy gets consumed. Measured in watts (W). The formula is simple:

**Power = Voltage x Current** (P = V x I)

A 100W lightbulb converts 100 joules of electrical energy into light and heat every second. An NVIDIA H100 GPU consumes 700W, converting 700 joules into matrix math every second. The newer B200 pulls 1,000W.

Energy (what you pay for) is power over time, measured in kilowatt-hours (kWh). One kWh means using 1,000 watts for one hour.

To put AI power consumption in perspective:

| Thing | Power |
|-------|-------|
| LED lightbulb | 10W |
| Your laptop | 45-100W |
| NVIDIA H100 GPU | 700W |
| NVIDIA B200 GPU | 1,000W |
| Single server rack | 20,000-100,000W |
| One data center | 100-300 million W |
| All US data centers (2026) | ~130 billion W |

A single data center uses as much power as a small city. All US data centers combined draw more than most countries.

## Ohm's Law: The One Formula

These four quantities connect through two equations:

**V = I x R** (Ohm's Law)
**P = V x I** (Power Law)

That's it. Voltage equals current times resistance. Power equals voltage times current. From these two formulas, you can derive everything else about electrical behavior.

If you increase resistance but keep voltage the same, current drops. If you increase voltage but keep resistance the same, more current flows. If you want more power, you need more voltage, more current, or both.

Every electrical engineering decision in a data center traces back to these two equations.

## From Electrons to Intelligence

So how do electrons become AI? The chain is surprisingly direct.

![From Electricity to Intelligence — The AI Pipeline](/images/electricity-ai-pipeline.png)

**Transistors** are tiny switches made of semiconductor material. Apply a small electrical signal and the switch turns on (1) or off (0). That's binary. Modern AI chips pack 208 billion of these switches onto a single piece of silicon smaller than your palm.

**Logic gates** combine a few transistors to perform simple decisions. Is this AND that both true? Is this OR that true? Is this NOT true?

**Arithmetic circuits** combine logic gates to add, subtract, multiply. Put enough of them together and you can do matrix multiplication, which is the core mathematical operation behind neural networks.

**GPUs** pack thousands of these arithmetic circuits (cores) running in parallel. Instead of doing one multiplication at a time (like a CPU), a GPU does thousands simultaneously. This is why GPUs dominate AI: neural network training and inference are fundamentally massive parallel math problems.

**Neural networks** are layers of matrix multiplications with nonlinear functions between them. Every "neuron" multiplies inputs by weights, sums them, and passes the result through an activation function. Do this across billions of parameters, and patterns emerge. Language. Vision. Reasoning.

Every single step in that chain requires electricity. Every transistor switch, every matrix multiply consumes a tiny amount of power. Multiply that by billions of operations per second, across thousands of GPUs, across thousands of data centers. That's the energy crisis of AI.

## The Numbers That Should Worry You

Here's where electricity stops being academic and starts being strategic.

A single ChatGPT query uses about 0.34 watt-hours of electricity. That's 10 times more than a Google search. With 2.5 billion queries per day, ChatGPT alone consumes roughly 850 megawatt-hours daily — about 310 GWh per year.

And that's just one product from one company.

Running AI models (inference) consumes 80% of total AI electricity. Training gets all the headlines, but inference is the real drain.

GPT-4 took about 50-60 million kWh to train. At 0.34 Wh per query and 2.5 billion daily queries, inference surpasses that entire training cost in about five months.

Global data center power consumption hit ~415 TWh in 2024. By 2026, projections put it at ~1,050 TWh. That's roughly equal to Japan's total electricity consumption.

AI-optimized workloads are the dominant driver of that growth.

In the US, data centers already consume 26% of Virginia's electricity. By 2030, US data processing could consume more electricity than all energy-intensive manufacturing combined, including aluminum, steel, cement, and chemicals.

The grid can't keep up. Workers built 70% of the US power grid between the 1950s and 1970s, and it's approaching end-of-life. Transmission interconnection requests face 2-3 year backlogs. Goldman Sachs estimates the grid needs $720 billion in investment by 2030.

## Why This Matters

If you work with AI, electricity now affects your work in concrete ways.

**Model selection** is increasingly a power question. A model that's 20% more accurate but requires 3x the compute is a hard sell when your data center is already at 95% power capacity.

**Data center location** is an electricity question. Companies build where power is cheap and plentiful. That's why you see data centers clustering in Virginia, Iowa, Oregon, and increasingly near nuclear facilities.

**Hardware specs** are power specs. When NVIDIA announces a new chip, the most important number isn't transistor count. It's performance-per-watt. A chip that does more math per joule of electricity is worth more than one that simply does more math.

**Cost projections** start with power. If electricity prices rise 20%, your AI operating costs rise with them. Understanding the fundamentals helps you see these connections before they hit your budget.

**The sustainability question** is an electricity question. Claims about "green AI" are really claims about electricity sources. Nuclear, solar, wind, natural gas: each has different cost curves, reliability profiles, and scaling timelines.

Knowing the basics helps you evaluate these claims critically.

## The Bottom Line

Electricity is not just a utility that AI happens to use. It is the physical substrate on which all computation runs. Every AI response you read started as a flow of electrons through a semiconductor switch.

In 2026, the companies that understand electricity will make better infrastructure decisions, build more efficient systems, and navigate the energy constraints that are reshaping where and how AI gets built.

The algorithms get all the attention. The electricity does all the work.

