-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 04 Des 2023 pada 17.43
-- Versi server: 10.4.27-MariaDB
-- Versi PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `waifu`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `animes`
--

CREATE TABLE `animes` (
  `id` int(11) NOT NULL,
  `anime` varchar(200) NOT NULL,
  `deskripsi` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `animes`
--

INSERT INTO `animes` (`id`, `anime`, `deskripsi`) VALUES
(1, 'Kage no Jitsuryokusha ni Naritakute!', 'Everything has been going according to plan, but the hour of awakening draws near. Cid Kagenou and Shadow Garden investigate the Lawless City, a cesspool where the red moon hangs low in the sky and th');

-- --------------------------------------------------------

--
-- Struktur dari tabel `characters`
--

CREATE TABLE `characters` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `picture_url` varchar(200) NOT NULL,
  `grade` int(11) NOT NULL,
  `anime_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `characters`
--

INSERT INTO `characters` (`id`, `name`, `picture_url`, `grade`, `anime_id`) VALUES
(1, 'Zeta ', 'https://cdn.myanimelist.net/images/characters/10/483019.jpg', 5, 1),
(2, 'Delta', 'https://cdn.myanimelist.net/images/characters/10/483020.jpg', 5, 1),
(3, 'Alpha', 'https://cdn.myanimelist.net/images/characters/16/491824.jpg', 5, 1),
(4, 'Epsilon', 'https://cdn.myanimelist.net/images/characters/15/483024.jpg', 5, 1);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `animes`
--
ALTER TABLE `animes`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `characters`
--
ALTER TABLE `characters`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `animes`
--
ALTER TABLE `animes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `characters`
--
ALTER TABLE `characters`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
