USE fightclub;
INSERT INTO characters 
    (name, image, health, attack, defense, special, specialInterval, createdAt, updatedAt) 
VALUES 
    ('Stringer Bell', '/images/PNG/characters 1 png/char15.png', 100, 30, 20, 'ATK200', 3, sysdate(), sysdate()),
    ('Jimmy McNulty', '/images/PNG/characters 1 png/char14.png', 200, 20, 15, 'HEAL25', 3, sysdate(), sysdate()),
    ('Omar Little', '/images/PNG/characters 1 png/char13.png', 150, 20, 25, 'DEF100', 3, sysdate(), sysdate()),
    ('Jesse Pinkman', '/images/PNG/characters 1 png/char12.png', 90, 20, 20, 'ATK250', 3, sysdate(), sysdate());
INSERT INTO bosscharacters 
    (name, image, health, attack, defense, special, specialInterval, createdAt, updatedAt) 
VALUES 
    ('Walter White', '/images/PNG/characters 1 png/char3.png', 250, 30, 0, 'ATK300', 4, sysdate(), sysdate());
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