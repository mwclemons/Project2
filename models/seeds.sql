USE fightclub;
INSERT INTO characters 
    (name, image, health, attack, defense, special, specialInterval, createdAt, updatedAt) 
VALUES 
    ('Stringer Bell', '/images/PNG/characters 1 png/char15.png', 100, 30, 20, 'ATK100', 3, sysdate(), sysdate()),
    ('Jimmy McNulty', '/images/PNG/characters 1 png/char14.png', 125, 10, 15, 'HEAL', 3, sysdate(), sysdate()),
    ('Omar Little', '/images/PNG/characters 1 png/char13.png', 150, 20, 40, 'DEF100', 3, sysdate(), sysdate()),
    ('Jesse Pinkman', '/images/PNG/characters 1 png/char12.png', 90, 20, 20, 'ATK100', 3, sysdate(), sysdate());
INSERT INTO bosscharacters 
    (name, image, health, attack, defense, special, specialInterval, createdAt, updatedAt) 
VALUES 
    ('Walter White', '/images/PNG/characters 1 png/char3.png', 250, 20, 0, 'ATK100', 3, sysdate(), sysdate());
INSERT INTO highscores 
    (name, characterUsed, score, createdAt, updatedAt) 
VALUES 
    ('John Doe', 'Omar Little', 1200, sysdate(), sysdate()),
    ('John Doe', 'Omar Little', 1200, sysdate(), sysdate()),
    ('John Doe', 'Omar Little', 1200, sysdate(), sysdate()),
    ('John Doe', 'Omar Little', 1200, sysdate(), sysdate()),
    ('John Doe', 'Omar Little', 1200, sysdate(), sysdate()),
    ('John Doe', 'Omar Little', 1200, sysdate(), sysdate()),
    ('John Doe', 'Omar Little', 1200, sysdate(), sysdate()),
    ('John Doe', 'Omar Little', 1200, sysdate(), sysdate()),
    ('John Doe', 'Omar Little', 1200, sysdate(), sysdate()),
    ('John Doe', 'Omar Little', 1200, sysdate(), sysdate());