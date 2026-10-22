import { PrismaClient } from '@prisma/client';
import {
  planetsData,
  celestialObjectsData,
  missionsData,
  glossaryData,
  quizQuestionsData,
  spaceFactsData,
  scientificSourcesData,
} from '../src/data/spaceData.js';

const prisma = new PrismaClient();

async function main() {
  console.log('🌌 Seeding SOLARVERSE database with verified astronomical data...');

  // 1. Seed Planets
  for (const p of planetsData) {
    await prisma.planet.upsert({
      where: { slug: p.slug },
      update: {
        name: p.name,
        category: p.category,
        orderFromSun: p.orderFromSun,
        tagline: p.tagline,
        overview: p.overview,
        discoveryHistory: p.discoveryHistory,
        formationHistory: p.formationHistory,
        positionSummary: p.positionSummary,
        meanRadiusKm: p.meanRadiusKm,
        meanDiameterKm: p.meanDiameterKm,
        massKg: p.massKg,
        massEarthRelative: p.massEarthRelative,
        gravityMps2: p.gravityMps2,
        gravityEarthRelative: p.gravityEarthRelative,
        meanDistanceFromSunKm: p.meanDistanceFromSunKm,
        meanDistanceAu: p.meanDistanceAu,
        perihelionKm: p.perihelionKm,
        aphelionKm: p.aphelionKm,
        orbitalPeriodDays: p.orbitalPeriodDays,
        orbitalPeriodYears: p.orbitalPeriodYears,
        orbitalVelocityKms: p.orbitalVelocityKms,
        orbitalInclinationDeg: p.orbitalInclinationDeg,
        orbitalEccentricity: p.orbitalEccentricity,
        rotationPeriodHours: p.rotationPeriodHours,
        rotationPeriodEarthDays: p.rotationPeriodEarthDays,
        dayLengthHours: p.dayLengthHours,
        rotationDirection: p.rotationDirection,
        axialTiltDeg: p.axialTiltDeg,
        seasonsDescription: p.seasonsDescription,
        atmosphereComposition: JSON.stringify(p.atmosphereComposition),
        surfacePressureBar: p.surfacePressureBar,
        meanTempC: p.meanTempC,
        minTempC: p.minTempC,
        maxTempC: p.maxTempC,
        tempMeasurementContext: p.tempMeasurementContext,
        surfaceComposition: p.surfaceComposition,
        geologyDescription: p.geologyDescription,
        notableFeatures: JSON.stringify(p.notableFeatures),
        moonCount: p.moonCount,
        confirmedMoons: p.confirmedMoons,
        provisionalMoons: p.provisionalMoons,
        hasRings: p.hasRings,
        ringSystemDescription: p.ringSystemDescription || null,
        magneticFieldDescription: p.magneticFieldDescription,
        internalStructure: JSON.stringify(p.internalStructure),
        weatherPhenomena: p.weatherPhenomena,
        explorationHistory: p.explorationHistory,
        majorMissions: JSON.stringify(p.majorMissions),
        lifePossibilityEvidence: p.lifePossibilityEvidence,
        lifePossibilityAssessment: p.lifePossibilityAssessment,
        interestingFacts: JSON.stringify(p.interestingFacts),
        earthComparison: JSON.stringify(p.earthComparison),
        faqs: JSON.stringify(p.faqs),
        colorHex: p.colorHex,
        accentColor: p.accentColor,
        textureKey: p.textureKey,
        heroImageUrl: p.heroImageUrl,
      },
      create: {
        slug: p.slug,
        name: p.name,
        category: p.category,
        orderFromSun: p.orderFromSun,
        tagline: p.tagline,
        overview: p.overview,
        discoveryHistory: p.discoveryHistory,
        formationHistory: p.formationHistory,
        positionSummary: p.positionSummary,
        meanRadiusKm: p.meanRadiusKm,
        meanDiameterKm: p.meanDiameterKm,
        massKg: p.massKg,
        massEarthRelative: p.massEarthRelative,
        gravityMps2: p.gravityMps2,
        gravityEarthRelative: p.gravityEarthRelative,
        meanDistanceFromSunKm: p.meanDistanceFromSunKm,
        meanDistanceAu: p.meanDistanceAu,
        perihelionKm: p.perihelionKm,
        aphelionKm: p.aphelionKm,
        orbitalPeriodDays: p.orbitalPeriodDays,
        orbitalPeriodYears: p.orbitalPeriodYears,
        orbitalVelocityKms: p.orbitalVelocityKms,
        orbitalInclinationDeg: p.orbitalInclinationDeg,
        orbitalEccentricity: p.orbitalEccentricity,
        rotationPeriodHours: p.rotationPeriodHours,
        rotationPeriodEarthDays: p.rotationPeriodEarthDays,
        dayLengthHours: p.dayLengthHours,
        rotationDirection: p.rotationDirection,
        axialTiltDeg: p.axialTiltDeg,
        seasonsDescription: p.seasonsDescription,
        atmosphereComposition: JSON.stringify(p.atmosphereComposition),
        surfacePressureBar: p.surfacePressureBar,
        meanTempC: p.meanTempC,
        minTempC: p.minTempC,
        maxTempC: p.maxTempC,
        tempMeasurementContext: p.tempMeasurementContext,
        surfaceComposition: p.surfaceComposition,
        geologyDescription: p.geologyDescription,
        notableFeatures: JSON.stringify(p.notableFeatures),
        moonCount: p.moonCount,
        confirmedMoons: p.confirmedMoons,
        provisionalMoons: p.provisionalMoons,
        hasRings: p.hasRings,
        ringSystemDescription: p.ringSystemDescription || null,
        magneticFieldDescription: p.magneticFieldDescription,
        internalStructure: JSON.stringify(p.internalStructure),
        weatherPhenomena: p.weatherPhenomena,
        explorationHistory: p.explorationHistory,
        majorMissions: JSON.stringify(p.majorMissions),
        lifePossibilityEvidence: p.lifePossibilityEvidence,
        lifePossibilityAssessment: p.lifePossibilityAssessment,
        interestingFacts: JSON.stringify(p.interestingFacts),
        earthComparison: JSON.stringify(p.earthComparison),
        faqs: JSON.stringify(p.faqs),
        colorHex: p.colorHex,
        accentColor: p.accentColor,
        textureKey: p.textureKey,
        heroImageUrl: p.heroImageUrl,
      },
    });
  }
  console.log(`✓ Seeded ${planetsData.length} planets`);

  // 2. Seed Celestial Objects
  for (const obj of celestialObjectsData) {
    await prisma.celestialObject.upsert({
      where: { slug: obj.slug },
      update: {
        name: obj.name,
        category: obj.category,
        parentBody: obj.parentBody || null,
        diameterKm: obj.diameterKm,
        massKg: obj.massKg || null,
        gravityMps2: obj.gravityMps2 || null,
        meanDistanceKm: obj.meanDistanceKm || null,
        meanDistanceAu: obj.meanDistanceAu || null,
        orbitalPeriodDays: obj.orbitalPeriodDays || null,
        discoveryYear: obj.discoveryYear || null,
        discoveredBy: obj.discoveredBy || null,
        overview: obj.overview,
        geology: obj.geology,
        atmosphere: obj.atmosphere || null,
        exploration: obj.exploration,
        scientificSignificance: obj.scientificSignificance,
        isDwarfPlanetIauExplained: !!obj.isDwarfPlanetIauExplained,
        imageUrl: obj.imageUrl,
        facts: JSON.stringify(obj.facts || []),
        sources: JSON.stringify(obj.sources || []),
      },
      create: {
        slug: obj.slug,
        name: obj.name,
        category: obj.category,
        parentBody: obj.parentBody || null,
        diameterKm: obj.diameterKm,
        massKg: obj.massKg || null,
        gravityMps2: obj.gravityMps2 || null,
        meanDistanceKm: obj.meanDistanceKm || null,
        meanDistanceAu: obj.meanDistanceAu || null,
        orbitalPeriodDays: obj.orbitalPeriodDays || null,
        discoveryYear: obj.discoveryYear || null,
        discoveredBy: obj.discoveredBy || null,
        overview: obj.overview,
        geology: obj.geology,
        atmosphere: obj.atmosphere || null,
        exploration: obj.exploration,
        scientificSignificance: obj.scientificSignificance,
        isDwarfPlanetIauExplained: !!obj.isDwarfPlanetIauExplained,
        imageUrl: obj.imageUrl,
        facts: JSON.stringify(obj.facts || []),
        sources: JSON.stringify(obj.sources || []),
      },
    });
  }
  console.log(`✓ Seeded ${celestialObjectsData.length} celestial objects`);

  // 3. Seed Missions
  for (const m of missionsData) {
    await prisma.mission.upsert({
      where: { slug: m.slug },
      update: {
        name: m.name,
        targetPlanet: m.targetPlanet,
        agency: m.agency,
        launchYear: m.launchYear,
        launchDate: m.launchDate,
        status: m.status,
        missionType: m.missionType,
        description: m.description,
        keyDiscoveries: JSON.stringify(m.keyDiscoveries),
        outcomes: m.outcomes,
        officialUrl: m.officialUrl,
        imageUrl: m.imageUrl,
      },
      create: {
        slug: m.slug,
        name: m.name,
        targetPlanet: m.targetPlanet,
        agency: m.agency,
        launchYear: m.launchYear,
        launchDate: m.launchDate,
        status: m.status,
        missionType: m.missionType,
        description: m.description,
        keyDiscoveries: JSON.stringify(m.keyDiscoveries),
        outcomes: m.outcomes,
        officialUrl: m.officialUrl,
        imageUrl: m.imageUrl,
      },
    });
  }
  console.log(`✓ Seeded ${missionsData.length} missions`);

  // 4. Seed Glossary Terms
  for (const g of glossaryData) {
    await prisma.glossaryTerm.upsert({
      where: { term: g.term },
      update: {
        category: g.category,
        pronunciation: g.pronunciation || null,
        shortDefinition: g.shortDefinition,
        fullDefinition: g.fullDefinition,
        formula: g.formula || null,
        relatedTerms: JSON.stringify(g.relatedTerms),
      },
      create: {
        term: g.term,
        category: g.category,
        pronunciation: g.pronunciation || null,
        shortDefinition: g.shortDefinition,
        fullDefinition: g.fullDefinition,
        formula: g.formula || null,
        relatedTerms: JSON.stringify(g.relatedTerms),
      },
    });
  }
  console.log(`✓ Seeded ${glossaryData.length} glossary terms`);

  // 5. Seed Quiz Questions
  await prisma.quizQuestion.deleteMany({});
  for (const q of quizQuestionsData) {
    await prisma.quizQuestion.create({
      data: {
        difficulty: q.difficulty,
        category: q.category,
        question: q.question,
        options: JSON.stringify(q.options),
        correctIndex: q.correctIndex,
        explanation: q.explanation,
        scientificReference: q.scientificReference,
      },
    });
  }
  console.log(`✓ Seeded ${quizQuestionsData.length} quiz questions`);

  // 6. Seed Space Facts
  await prisma.spaceFact.deleteMany({});
  for (const f of spaceFactsData) {
    await prisma.spaceFact.create({
      data: {
        category: f.category,
        fact: f.fact,
        explanation: f.explanation,
        sourceName: f.sourceName,
        sourceUrl: f.sourceUrl,
        verificationDate: f.verificationDate,
      },
    });
  }
  console.log(`✓ Seeded ${spaceFactsData.length} space facts`);

  // 7. Seed Scientific Sources
  await prisma.scientificSource.deleteMany({});
  for (const s of scientificSourcesData) {
    await prisma.scientificSource.create({
      data: {
        name: s.name,
        organization: s.organization,
        url: s.url,
        description: s.description,
        lastVerified: s.lastVerified,
      },
    });
  }
  console.log(`✓ Seeded ${scientificSourcesData.length} scientific sources`);

  console.log('✨ Database seeding complete with full verification!');
}

main()
  .catch((e) => {
    console.error('Seed error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
