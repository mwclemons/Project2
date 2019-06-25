USE fightclub;
INSERT INTO characters 
    (name, image, health, attack, defense, special, specialInterval, createdAt, updatedAt) 
VALUES 
    ('Tyrion Lannister', '/images/PNG/characters 1 png/char15.png', 250, 40, 20, 'Do 80 damage', 4, sysdate(), sysdate()),
    ('Jon Snow', '/images/PNG/characters 1 png/char14.png', 320, 25, 25, 'Heal 25%', 5, sysdate(), sysdate()),
    ('Omar Little', '/images/PNG/characters 1 png/char13.png', 250, 20, 25, 'Heal 50%', 6, sysdate(), sysdate()),
    ('Jesse Pinkman', '/images/PNG/characters 1 png/char12.png', 275, 25, 20, 'Do 50 damage', 3, sysdate(), sysdate());
INSERT INTO bosscharacters 
    (name, image, health, attack, defense, special, specialInterval, createdAt, updatedAt) 
VALUES 
    ('Avon Barksdale', '/images/PNG/characters 1 png/char11.png', 100, 20, 0, 30, 2, sysdate(), sysdate()),
    ('Gus Fring', '/images/PNG/characters 1 png/char1.png', 150, 20, 0, 40, 3, sysdate(), sysdate()),
    ('Walter White', '/images/PNG/characters 1 png/char3.png', 200, 25, 0, 50, 4, sysdate(), sysdate()),
    ('Daenerys Targaryen', '/images/PNG/characters 1 png/char10.png', 250, 30, 0, 60, 3, sysdate(), sysdate()),
    ('Khal Drogo', '/images/PNG/characters 1 png/char2.png', 325, 40, 0, 100, 4, sysdate(), sysdate()),
    ('Stringer Bell', '/images/PNG/characters 1 png/char4.png', 400, 50, 0, 75, 3, sysdate(), sysdate()),
    ('Sansa Stark', '/images/PNG/characters 1 png/char9.png', 420, 40, 0, 120, 1, sysdate(), sysdate());
INSERT INTO highscores 
    (name, characterUsed, score, createdAt, updatedAt) 
VALUES 
    ('John Doe', 'Omar Little', 500, sysdate(), sysdate()),
    ('John Doe', 'Omar Little', 450, sysdate(), sysdate()),
    ('John Doe', 'Omar Little', 400, sysdate(), sysdate()),
    ('John Doe', 'Omar Little', 350, sysdate(), sysdate()),
    ('John Doe', 'Omar Little', 325, sysdate(), sysdate()),
    ('John Doe', 'Omar Little', 300, sysdate(), sysdate()),
    ('John Doe', 'Omar Little', 270, sysdate(), sysdate()),
    ('John Doe', 'Omar Little', 250, sysdate(), sysdate()),
    ('John Doe', 'Omar Little', 220, sysdate(), sysdate()),
    ('John Doe', 'Omar Little', 200, sysdate(), sysdate());