PGDMP     7    ,                y            postgres    12.6    13.2     ~           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ?           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ?           1262    13318    postgres    DATABASE     l   CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_United States.1252';
    DROP DATABASE postgres;
                postgres    false            ?           0    0    DATABASE postgres    COMMENT     N   COMMENT ON DATABASE postgres IS 'default administrative connection database';
                   postgres    false    2945            ?            1259    62292    variants    TABLE       CREATE TABLE public.variants (
    id integer,
    "variantId" character varying(500) DEFAULT 'NULL::character varying'::character varying,
    sku character varying(1000) DEFAULT 'NULL::character varying'::character varying,
    size character varying(500) DEFAULT 'NULL::character varying'::character varying,
    color character varying(500) DEFAULT 'NULL::character varying'::character varying,
    "imageId" integer,
    "CreatedAt" timestamp without time zone,
    "CreatedBy" integer,
    "IsActive" bit(1)
);
    DROP TABLE public.variants;
       public         heap    postgres    false            {          0    62292    variants 
   TABLE DATA           v   COPY public.variants (id, "variantId", sku, size, color, "imageId", "CreatedAt", "CreatedBy", "IsActive") FROM stdin;
    public          postgres    false    243   ?       {      x?????? ? ?     