import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Booth } from './booth/entities/booth.entity';
import { Poet } from './poet/entities/poet.entity';
import { Collection } from './collection/entities/collection.entity';
import { Poem } from './poem/entities/poem.entity';

async function seed() {
  const app = await NestFactory.createApplicationContext(AppModule);

  const boothRepo = app.get(getRepositoryToken(Booth));
  const poetRepo = app.get(getRepositoryToken(Poet));
  const collectionRepo = app.get(getRepositoryToken(Collection));
  const poemRepo = app.get(getRepositoryToken(Poem));

  // Booths
  const booth1 = await boothRepo.save({ location: 'Lahore Museum', theme: 'Spiritual Poetry' });
  const booth2 = await boothRepo.save({ location: 'Alhamra Arts Council', theme: 'Classical Urdu Poetry' });

  // Poets
  const iqbal = await poetRepo.save({ name: 'Allama Iqbal', biography: 'Philosopher and poet of the East', birth_date: '1877-11-09', death_date: '1938-04-21' });
  const parveen = await poetRepo.save({ name: 'Parveen Shakir', biography: 'Famous Urdu poetess', birth_date: '1952-11-24', death_date: '1994-12-26' });
  const faiz = await poetRepo.save({ name: 'Faiz Ahmed Faiz', biography: 'Revolutionary Urdu poet', birth_date: '1911-02-13', death_date: '1984-11-20' });

  // Collections
  const col1 = await collectionRepo.save({ name: 'Bang-e-Dra', category: 'Sufism', description: 'First Urdu poetry collection by Iqbal', booth: booth1, poets: [iqbal] });
  const col2 = await collectionRepo.save({ name: 'Khushbu', category: 'Romantic', description: 'Famous collection by Parveen Shakir', booth: booth2, poets: [parveen, faiz] });

  // Poems
  await poemRepo.save({ name: 'Lab Pe Aati Hai Dua', description: 'A prayer poem', text: 'Lab pe aati hai dua ban ke tamanna meri...', collection: col1, poet: iqbal });
  await poemRepo.save({ name: 'Khudi Ko Kar Buland', description: 'Poem about self-respect', text: 'Khudi ko kar buland itna...', collection: col1, poet: iqbal });
  await poemRepo.save({ name: 'Inkar', description: 'A poem by Parveen Shakir', text: 'Main ne socha tha...', collection: col2, poet: parveen });
  await poemRepo.save({ name: 'Mujh Se Pehli Si Mohabbat', description: 'Revolutionary love poem', text: 'Mujh se pehli si mohabbat meri mehboob na maang...', collection: col2, poet: faiz });

  console.log('Seed data inserted successfully!');
  await app.close();
}

seed();