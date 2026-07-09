--
-- PostgreSQL database dump
--

\restrict fSuMDEKWxjkcklAnsh7efjAs9XgwFxAjFs0JI3QTdNYmpd4DqYePFIjI91Ua3w7

-- Dumped from database version 18.3
-- Dumped by pg_dump version 18.3

-- Started on 2026-06-11 01:24:30

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 228 (class 1259 OID 16608)
-- Name: logs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.logs (
    logs_id integer NOT NULL,
    account_id integer,
    event text,
    date timestamp with time zone
);


ALTER TABLE public.logs OWNER TO postgres;

--
-- TOC entry 227 (class 1259 OID 16607)
-- Name: logs_logs_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.logs_logs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.logs_logs_id_seq OWNER TO postgres;

--
-- TOC entry 4963 (class 0 OID 0)
-- Dependencies: 227
-- Name: logs_logs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.logs_logs_id_seq OWNED BY public.logs.logs_id;


--
-- TOC entry 224 (class 1259 OID 16588)
-- Name: newsfeed; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.newsfeed (
    news_id integer NOT NULL,
    date timestamp with time zone,
    content text,
    attachments jsonb,
    tags jsonb,
    premium boolean
);


ALTER TABLE public.newsfeed OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 16587)
-- Name: newsfeed_news_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.newsfeed_news_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.newsfeed_news_id_seq OWNER TO postgres;

--
-- TOC entry 4964 (class 0 OID 0)
-- Dependencies: 223
-- Name: newsfeed_news_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.newsfeed_news_id_seq OWNED BY public.newsfeed.news_id;


--
-- TOC entry 222 (class 1259 OID 16578)
-- Name: posts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.posts (
    post_id integer NOT NULL,
    account_id integer,
    content text,
    date timestamp with time zone,
    attachments text,
    score integer,
    tags jsonb
);


ALTER TABLE public.posts OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 16577)
-- Name: posts_post_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.posts_post_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.posts_post_id_seq OWNER TO postgres;

--
-- TOC entry 4965 (class 0 OID 0)
-- Dependencies: 221
-- Name: posts_post_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.posts_post_id_seq OWNED BY public.posts.post_id;


--
-- TOC entry 226 (class 1259 OID 16598)
-- Name: preferences; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.preferences (
    pref_id integer NOT NULL,
    account_id integer,
    tags jsonb,
    subscriptions jsonb
);


ALTER TABLE public.preferences OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 16597)
-- Name: preferences_pref_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.preferences_pref_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.preferences_pref_id_seq OWNER TO postgres;

--
-- TOC entry 4966 (class 0 OID 0)
-- Dependencies: 225
-- Name: preferences_pref_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.preferences_pref_id_seq OWNED BY public.preferences.pref_id;


--
-- TOC entry 230 (class 1259 OID 16618)
-- Name: sessions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sessions (
    session_id integer NOT NULL,
    account_id integer,
    token text,
    ip_address inet,
    user_agent text,
    device_type text,
    device_name text,
    country text,
    created_at timestamp with time zone,
    expires_at timestamp with time zone,
    last_active_at timestamp with time zone,
    revoked_at timestamp with time zone,
    revoke_reason text
);


ALTER TABLE public.sessions OWNER TO postgres;

--
-- TOC entry 229 (class 1259 OID 16617)
-- Name: sessions_session_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.sessions_session_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.sessions_session_id_seq OWNER TO postgres;

--
-- TOC entry 4967 (class 0 OID 0)
-- Dependencies: 229
-- Name: sessions_session_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.sessions_session_id_seq OWNED BY public.sessions.session_id;


--
-- TOC entry 232 (class 1259 OID 16628)
-- Name: subscription; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.subscription (
    subscription_id integer NOT NULL,
    account_id integer,
    state boolean,
    start_date timestamp with time zone,
    expiration_date timestamp with time zone
);


ALTER TABLE public.subscription OWNER TO postgres;

--
-- TOC entry 231 (class 1259 OID 16627)
-- Name: subscription_subscription_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.subscription_subscription_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.subscription_subscription_id_seq OWNER TO postgres;

--
-- TOC entry 4968 (class 0 OID 0)
-- Dependencies: 231
-- Name: subscription_subscription_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.subscription_subscription_id_seq OWNED BY public.subscription.subscription_id;


--
-- TOC entry 220 (class 1259 OID 16568)
-- Name: user-details; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."user-details" (
    account_id integer NOT NULL,
    username text,
    password text,
    email text
);


ALTER TABLE public."user-details" OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16567)
-- Name: user-details_account_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."user-details_account_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."user-details_account_id_seq" OWNER TO postgres;

--
-- TOC entry 4969 (class 0 OID 0)
-- Dependencies: 219
-- Name: user-details_account_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."user-details_account_id_seq" OWNED BY public."user-details".account_id;


--
-- TOC entry 4789 (class 2604 OID 16611)
-- Name: logs logs_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.logs ALTER COLUMN logs_id SET DEFAULT nextval('public.logs_logs_id_seq'::regclass);


--
-- TOC entry 4787 (class 2604 OID 16591)
-- Name: newsfeed news_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.newsfeed ALTER COLUMN news_id SET DEFAULT nextval('public.newsfeed_news_id_seq'::regclass);


--
-- TOC entry 4786 (class 2604 OID 16581)
-- Name: posts post_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.posts ALTER COLUMN post_id SET DEFAULT nextval('public.posts_post_id_seq'::regclass);


--
-- TOC entry 4788 (class 2604 OID 16601)
-- Name: preferences pref_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.preferences ALTER COLUMN pref_id SET DEFAULT nextval('public.preferences_pref_id_seq'::regclass);


--
-- TOC entry 4790 (class 2604 OID 16621)
-- Name: sessions session_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sessions ALTER COLUMN session_id SET DEFAULT nextval('public.sessions_session_id_seq'::regclass);


--
-- TOC entry 4791 (class 2604 OID 16631)
-- Name: subscription subscription_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.subscription ALTER COLUMN subscription_id SET DEFAULT nextval('public.subscription_subscription_id_seq'::regclass);


--
-- TOC entry 4785 (class 2604 OID 16571)
-- Name: user-details account_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user-details" ALTER COLUMN account_id SET DEFAULT nextval('public."user-details_account_id_seq"'::regclass);


--
-- TOC entry 4801 (class 2606 OID 16616)
-- Name: logs logs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.logs
    ADD CONSTRAINT logs_pkey PRIMARY KEY (logs_id);


--
-- TOC entry 4797 (class 2606 OID 16596)
-- Name: newsfeed newsfeed_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.newsfeed
    ADD CONSTRAINT newsfeed_pkey PRIMARY KEY (news_id);


--
-- TOC entry 4795 (class 2606 OID 16586)
-- Name: posts posts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_pkey PRIMARY KEY (post_id);


--
-- TOC entry 4799 (class 2606 OID 16606)
-- Name: preferences preferences_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.preferences
    ADD CONSTRAINT preferences_pkey PRIMARY KEY (pref_id);


--
-- TOC entry 4803 (class 2606 OID 16626)
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (session_id);


--
-- TOC entry 4805 (class 2606 OID 16634)
-- Name: subscription subscription_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.subscription
    ADD CONSTRAINT subscription_pkey PRIMARY KEY (subscription_id);


--
-- TOC entry 4793 (class 2606 OID 16576)
-- Name: user-details user-details_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user-details"
    ADD CONSTRAINT "user-details_pkey" PRIMARY KEY (account_id);


--
-- TOC entry 4808 (class 2606 OID 16645)
-- Name: logs logs_account_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.logs
    ADD CONSTRAINT logs_account_id_fkey FOREIGN KEY (account_id) REFERENCES public."user-details"(account_id);


--
-- TOC entry 4806 (class 2606 OID 16635)
-- Name: posts posts_account_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_account_id_fkey FOREIGN KEY (account_id) REFERENCES public."user-details"(account_id);


--
-- TOC entry 4807 (class 2606 OID 16640)
-- Name: preferences preferences_account_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.preferences
    ADD CONSTRAINT preferences_account_id_fkey FOREIGN KEY (account_id) REFERENCES public."user-details"(account_id);


--
-- TOC entry 4809 (class 2606 OID 16650)
-- Name: sessions sessions_account_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_account_id_fkey FOREIGN KEY (account_id) REFERENCES public."user-details"(account_id);


--
-- TOC entry 4810 (class 2606 OID 16655)
-- Name: subscription subscription_account_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.subscription
    ADD CONSTRAINT subscription_account_id_fkey FOREIGN KEY (account_id) REFERENCES public."user-details"(account_id);


-- Completed on 2026-06-11 01:24:30

--
-- PostgreSQL database dump complete
--

\unrestrict fSuMDEKWxjkcklAnsh7efjAs9XgwFxAjFs0JI3QTdNYmpd4DqYePFIjI91Ua3w7

